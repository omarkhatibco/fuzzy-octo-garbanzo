import { FC, useCallback, useDeferredValue, useState } from 'react'

import { AutoCompleteContainer } from './AutoCompleteContainer'
import { AutoCompleteInput } from './AutoCompleteInput'
import { AutoCompleteResult } from './AutoCompleteResult'

export const AutoComplete: FC = () => {
  const [value, setValue] = useState('')
  const deferredSearch = useDeferredValue(value)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return (
    <AutoCompleteContainer>
      <AutoCompleteInput
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search for a Star Wars...'
      />
      <AutoCompleteResult searchValue={deferredSearch} />
    </AutoCompleteContainer>
  )
}
