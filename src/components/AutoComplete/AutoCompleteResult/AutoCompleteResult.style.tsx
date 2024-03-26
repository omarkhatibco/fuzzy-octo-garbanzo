import { cva } from '#/css'
import { styled } from '#/jsx'

export const autoCompleteResultStyle = cva({
  base: {
    position: 'absolute',
    top: '100%',
    zIndex: 1,
    width: 'full',
    mt: 4,
    p: 4,
    order: 1,
    backgroundColor: 'gray.50',
    color: 'gray.900',
    outline: 'none',
    transition: 'all',
    _placeholder: {
      color: 'gray.500',
    },
    borderColor: 'gray.200',
    borderWidth: 1,
    rounded: 'md',
  },
})

export const Wrapper = styled('ul', autoCompleteResultStyle)
