import { Field } from 'payload'

export type Type = 'orange' | 'red' | 'none' | 'blue' | 'gray'

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Cor de fundo',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'Nenhuma',
      value: 'none',
    },
    {
      label: 'Vermelho',
      value: 'red',
    },
    {
      label: 'Azul',
      value: 'blue',
    },
    {
      label: 'Laranja',
      value: 'orange',
    },
    {
      label: 'Preto',
      value: 'black',
    },
    {
      label: 'Branco',
      value: 'white',
    },
  ],
}

export default backgroundColor
