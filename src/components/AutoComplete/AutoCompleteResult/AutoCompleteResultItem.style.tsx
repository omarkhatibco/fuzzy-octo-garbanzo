import { cva } from '#/css'
import { styled } from '#/jsx'

export const autoCompleteResultItemStyle = cva({
  base: {
    p: 4,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',

    _hover: {
      backgroundColor: 'gray.200',
    },
  },
})

export const Wrapper = styled('li', autoCompleteResultItemStyle)
