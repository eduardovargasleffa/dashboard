import { GlobalConfig } from 'payload'

export const General: GlobalConfig = {
  slug: 'geral',
  label: 'Geral',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Nome da empresa',
    },
    { type: 'upload', name: 'logoWhite', label: 'Logo para fundo claro', relationTo: 'media' },
    { type: 'upload', name: 'logoDark', label: 'Logo para fundo escuro', relationTo: 'media' },
    { type: 'upload', name: 'favicon', label: 'Favicon', relationTo: 'media' },
    { type: 'text', name: 'gtag', label: 'Google Tag Manager ID' },
  ],
}
