import { FC } from 'react'

import { AutoCompleteContainer } from './AutoCompleteContainer'
import { AutoCompleteInput } from './AutoCompleteInput'
import { AutoCompleteResult } from './AutoCompleteResult'

export const AutoComplete: FC = () => {
  return (
    <AutoCompleteContainer>
      <AutoCompleteInput />
      <AutoCompleteResult />
    </AutoCompleteContainer>
  )
}
