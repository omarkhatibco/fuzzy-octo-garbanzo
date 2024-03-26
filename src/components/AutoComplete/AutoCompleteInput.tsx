import { cva } from '#/css'
import { styled } from '#/jsx'

export const autoCompleteInputStyle = cva({
  base: {
    p: 4,
    order: 1,
    height: 14,
    width: 'full',
    appearance: 'none',
    backgroundColor: 'gray.100',
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

export const AutoCompleteInput = styled('input', autoCompleteInputStyle)
