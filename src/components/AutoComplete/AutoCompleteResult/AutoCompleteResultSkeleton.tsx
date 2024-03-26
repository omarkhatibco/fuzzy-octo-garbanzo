import { FC } from 'react'

import { useMovies } from '@/hooks'

import { Wrapper } from './AutoCompleteResult.style'
import { AutoCompleteResultItem } from './AutoCompleteResultItem'

export type AutoCompleteResultProps = {
  searchValue: string
}

export const AutoCompleteResult: FC<AutoCompleteResultProps> = ({ searchValue }) => {
  const { data, isLoading } = useMovies(searchValue)

  const { results: movies } = data ?? { results: [] }

  return (
    <Wrapper>
      {movies.map(movie => (
        <AutoCompleteResultItem
          key={movie.episode_id}
          {...movie}
        />
      ))}
    </Wrapper>
  )
}
