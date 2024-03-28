import { useCallback } from 'react'
import { cva } from '#/css'
import { styled } from '#/jsx'
import { useAtom } from 'jotai'

import { searchAtom } from './AutoComplete.state'

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

export const Input = styled('input', autoCompleteInputStyle)

export const AutoCompleteInput = () => {
  const [value, setValue] = useAtom(searchAtom)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue],
  )

  return (
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search for a Star Wars...'
    />
  )
}
