import { FC, useCallback, useState } from 'react'

import { AutoCompleteInput } from './AutoComplete.style'

export const AutoComplete: FC = () => {
  const [value, setValue] = useState('')

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return (
    <AutoCompleteInput
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search for a Star Wars...'
    />
  )
}
