import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  labels: {
    plural: 'Blocos de mídia',
    singular: 'Bloco de mídia',
  },
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
