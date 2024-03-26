import { FC } from 'react'
import { styled } from '#/jsx'

import { useMovies } from '@/hooks'

import { Wrapper } from './AutoCompleteResult.style'
import { AutoCompleteResultItem } from './AutoCompleteResultItem'

export type AutoCompleteResultProps = {
  searchValue: string
  isOpen?: boolean
}

export const AutoCompleteResult: FC<AutoCompleteResultProps> = ({ searchValue }) => {
  const { data, isLoading } = useMovies(searchValue)

  const { results: movies } = data || {}

  if ((searchValue === '' && !isLoading) || searchValue.length < 2) {
    return null
  }

  return (
    <Wrapper role='listbox'>
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
      {!isLoading && Array.isArray(movies) && movies.length === 0 && (
        <styled.div
          fontSize={'xl'}
          p={4}
        >
          No Results
        </styled.div>
      )}
    </Wrapper>
  )
}
