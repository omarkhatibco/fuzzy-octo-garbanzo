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
  },
})

export const AutoCompleteInput = styled('input', autoCompleteInputStyle)
