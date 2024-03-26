import { cva } from '#/css'
import { styled } from '#/jsx'

export const autoCompleteContainerStyle = cva({
  base: {
    position: 'relative',
  },
})

export const AutoCompleteContainer = styled('div', autoCompleteContainerStyle)
