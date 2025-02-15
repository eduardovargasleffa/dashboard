import { gcsStorage } from '@payloadcms/storage-gcs'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import { fieldsToForm, formField } from '@/fields/form'
import { COMPANY } from '@/constants'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | ${COMPANY.name}` : COMPANY.name
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  gcsStorage({
    collections: {
      media: true,
    },
    bucket: `${process.env.GCS_BUCKET}`,
    options: {
      projectId: process.env.GCS_PROJECT_ID,
    },
  }),
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      labels: {
        plural: 'Redirecionamentos',
        singular: 'Redirecionamento',
      },
      admin: {
        group: 'Configurações',
      },
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'Você precisará reconstruir o site enquanto altera esse campo.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formSubmissionOverrides: {
      labels: { singular: 'Resposta de formulários', plural: 'Respostas de formulários' },
      admin: { group: 'Marketing' },
      fields: () => {
        return [
          {
            name: 'form',
            label: 'Formulário',
            type: 'relationship',
            admin: {
              readOnly: true,
            },
            relationTo: 'forms',
            required: true,
          },
          {
            name: 'submissionData',
            label: 'Dados enviados',
            type: 'array',
            admin: {
              readOnly: true,
            },
            fields: [
              {
                name: 'field',
                label: 'Campo',
                type: 'text',
                required: true,
              },
              {
                name: 'value',
                label: 'Resposta',
                type: 'text',
                required: true,
              },
            ],
          },
        ]
      },
    },
    formOverrides: {
      labels: { singular: 'Formulário', plural: 'Formulários' },
      admin: { group: 'Configurações' },
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'title') {
            return {
              ...field,
              label: 'Nome do formulário',
            }
          }
          if ('name' in field && field.name === 'fields') {
            return {
              ...fieldsToForm,
              label: 'Campos do formulário',
            }
          }
          if ('name' in field && field.name === 'submitButtonLabel') {
            return {
              ...field,
              label: 'Botão de envio',
            }
          }
          if ('name' in field && field.name === 'confirmationType') {
            return {
              name: 'confirmationType',
              type: 'radio',
              label: 'Tipo de confirmação',
              admin: {
                description:
                  'Escolha se deseja exibir uma mensagem na página ou redirecionar para uma página diferente depois que o formulário for enviado.',
                layout: 'horizontal',
              },
              defaultValue: 'message',
              options: [
                {
                  label: 'Mensagem',
                  value: 'message',
                },
                {
                  label: 'Redirecionamento',
                  value: 'redirect',
                },
              ],
            }
          }

          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              label: 'Mensagem de confirmação',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          if ('name' in field && field.name === 'redirect') {
            return {
              ...field,
              label: 'Redirecionamento',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL de redirecionamento',
                  required: true,
                },
              ],
            }
          }
          if ('name' in field && field.name === 'emails') {
            return {
              ...field,
              fields: formField,
              admin: {
                description:
                  'Envie e-mails customizados quando for enviar um formulário. Use listas separadas por vírgulas para enviar o mesmo e-mail para vários destinatários. Para referenciar um valor deste formulário, envolva o nome desse campo com colchetes duplos, ou seja, {{nome}}. Você pode usar um curinga {{*}} para gerar todos os dados e {{*:table}} para formatá-los como uma tabela HTML no e-mail.',
              },
            }
          }

          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      labels: {
        plural: 'Buscas',
        singular: 'Busca',
      },
      admin: {
        group: 'Configurações',
      },
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
