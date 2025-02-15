import { GlobalConfig } from 'payload'

export type Type = {
  links: {
    label: string
    url: string
  }[]
}

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  label: 'Redes Sociais',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'array',
      name: 'links',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default SocialMedia
