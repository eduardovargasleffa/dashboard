import { Field } from 'payload'

export const formField: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'emailTo',
        type: 'text',
        admin: {
          placeholder: '"Enviar para" <nome-da-pessoa@email.com>',
          width: '100%',
        },
        label: 'Enviar para',
      },
      {
        name: 'cc',
        type: 'text',
        admin: {
          style: {
            maxWidth: '50%',
          },
        },
        label: 'CC - Com cópia',
      },
      {
        name: 'bcc',
        type: 'text',
        admin: {
          style: {
            maxWidth: '50%',
          },
        },
        label: 'BCC - Com cópia oculta',
      },
    ],
  },
  {
    type: 'row',
    fields: [
      {
        name: 'replyTo',
        type: 'text',
        admin: {
          placeholder: '"Responder para" <email-de-resposta@empresa.com>',
          width: '50%',
        },
        label: 'Responder para',
      },
      {
        name: 'emailFrom',
        type: 'text',
        admin: {
          placeholder: '"Email de" <contato@empresa.com>',
          width: '50%',
        },
        label: 'Email de',
      },
    ],
  },
  {
    name: 'subject',
    type: 'text',
    defaultValue: 'Você recebeu uma nova mensagem',
    label: 'Assunto',
    localized: true,
    required: true,
  },
  {
    name: 'message',
    type: 'richText',
    admin: {
      description: 'Insira a mensagem que deve ser enviada neste e-mail.',
    },
    label: 'Mensagem',
    localized: true,
  },
]

export const fieldsToForm: Field = {
  name: 'fields',
  labels: { plural: 'Campos', singular: 'Campo' },
  type: 'blocks',
  blocks: [
    {
      slug: 'checkbox',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Tamanho do campo (porcentagem)',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Campo obrigatório?',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'defaultValue',
          type: 'checkbox',
          label: 'Definir padrão',
        },
      ],
      labels: {
        plural: 'Campos de múltipla seleção',
        singular: 'Campo de múltipla seleção',
      },
    },
    {
      slug: 'country',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'width',
          type: 'number',
          label: 'Tamanho do campo (porcentagem)',
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campo de seleção de Países',
        singular: 'Campo de seleção de País',
      },
    },
    {
      slug: 'email',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'width',
          type: 'number',
          label: 'Tamanho do campo (porcentagem)',
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de e-mail',
        singular: 'Campo de e-mail',
      },
    },
    {
      slug: 'message',
      fields: [
        {
          name: 'message',
          type: 'richText',
          localized: true,
        },
      ],
      labels: {
        plural: 'Campos de mensagem',
        singular: 'Campo de mensagem',
      },
    },
    {
      slug: 'number',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Tamanho do campo (porcentagem)',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'defaultValue',
              type: 'number',
              admin: {
                width: '50%',
              },
              label: 'Valor padrão',
            },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de número',
        singular: 'Campo de número',
      },
    },
    {
      slug: 'select',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Tamanho do campo (porcentagem)',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'defaultValue',
              type: 'text',
              admin: {
                width: '50%',
              },
              label: 'Valor padrão',
              localized: true,
            },
          ],
        },
        {
          name: 'options',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                  label: 'Legenda',
                  localized: true,
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                  label: 'Valor',
                  required: true,
                },
              ],
            },
          ],
          label: 'Selecionar opções de atributos',
          labels: {
            plural: 'Opções',
            singular: 'Opção',
          },
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de seleção',
        singular: 'Campo de seleção',
      },
    },
    {
      slug: 'state',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'width',
          type: 'number',
          label: 'Tamanho do campo (porcentagem)',
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de seleção de estados',
        singular: 'Campo de seleção de estados',
      },
    },
    {
      slug: 'text',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Tamanho do campo (porcentagem)',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'defaultValue',
              type: 'text',
              admin: {
                width: '50%',
              },
              label: 'Valor padrão',
              localized: true,
            },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de texto',
        singular: 'Campo de texto',
      },
    },
    {
      slug: 'textarea',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Nome (minúsculo, sem espaços e sem caraceres especiais)',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Legenda',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              type: 'number',
              label: 'Tamanho do campo (porcentagem)',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'defaultValue',
              type: 'text',
              admin: {
                width: '50%',
              },
              label: 'Valor padrão',
              localized: true,
            },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Campo obrigatório?',
        },
      ],
      labels: {
        plural: 'Campos de textarea',
        singular: 'Campo de textarea',
      },
    },
  ],
}
