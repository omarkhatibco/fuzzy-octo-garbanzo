import { FC } from 'react'

import { useMovies } from '@/hooks'

import { Wrapper } from './AutoCompleteResult.style'

export type AutoCompleteResultProps = {
  searchValue: string
}

export const AutoCompleteResult: FC<AutoCompleteResultProps> = ({ searchValue }) => {
  const { data, isLoading } = useMovies(searchValue)

  return (
    <Wrapper>
      <div>
        <p>Result 1</p>
        <p>Result 2</p>
        <p>Result 3</p>
      </div>
    </Wrapper>
  )
}
