import { FC, useCallback, useDeferredValue, useState } from 'react'

import { useMovies } from '@/hooks'

import { AutoCompleteContainer } from './AutoCompleteContainer'
import { AutoCompleteInput } from './AutoCompleteInput'

export const AutoComplete: FC = () => {
  const [value, setValue] = useState('')
  const deferredSearch = useDeferredValue(value)
  const { data, isLoading } = useMovies(deferredSearch)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  console.log(data, isLoading)

  return (
    <AutoCompleteContainer>
      <AutoCompleteInput
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search for a Star Wars...'
      />
    </AutoCompleteContainer>
  )
}
