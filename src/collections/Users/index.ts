import type { CollectionConfig, CollectionSlug } from 'payload'

import { authenticated } from '../../access/authenticated'
import { Media } from '../Media'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Usuário',
    plural: 'Usuários',
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
    group: 'Configurações',
  },
  auth: true,
  fields: [
    {
      name: 'image',
      type: 'relationship',
      relationTo: Media.slug as CollectionSlug,
      label: 'Foto',
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      label: 'Função',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Autor', value: 'author' },
      ],
      defaultValue: 'author',
      required: true,
    },
  ],
  timestamps: true,
}
