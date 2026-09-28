import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },

    disabled: {
      control: 'boolean',
    },

    children: {
      control: 'text',
    },
  },
}

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Order Lunch',
  },
}