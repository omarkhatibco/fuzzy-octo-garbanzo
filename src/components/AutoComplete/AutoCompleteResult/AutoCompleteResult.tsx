import { FC } from 'react'
import { styled } from '#/jsx'

import { useMovies } from '@/hooks'

import { Wrapper } from './AutoCompleteResult.style'
import { AutoCompleteResultItem } from './AutoCompleteResultItem'

export type AutoCompleteResultProps = {
  searchValue: string
}

export const AutoCompleteResult: FC<AutoCompleteResultProps> = ({ searchValue }) => {
  const { data, isLoading } = useMovies(searchValue)

  const { results: movies } = data || {}

  return (
    <Wrapper>
      {!isLoading &&
        Array.isArray(movies) &&
        movies.map(movie => (
          <AutoCompleteResultItem
            key={movie.episode_id}
            searchValue={searchValue}
            {...movie}
          />
        ))}
      {isLoading && (
        <styled.div
          fontSize={'xl'}
          p={4}
        >
          Loading...
        </styled.div>
      )}
    </Wrapper>
  )
}
