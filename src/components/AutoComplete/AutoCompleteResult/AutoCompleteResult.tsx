import { FC, useDeferredValue } from 'react'
import { styled } from '#/jsx'
import { useAtomValue } from 'jotai'

import { useMovies } from '@/hooks'

import { searchAtom } from '../AutoComplete.state'
import { Wrapper } from './AutoCompleteResult.style'
import { AutoCompleteResultItem } from './AutoCompleteResultItem'

export type AutoCompleteResultProps = {
  isOpen?: boolean
}

export const AutoCompleteResult: FC<AutoCompleteResultProps> = () => {
  const searchValue = useAtomValue(searchAtom)
  const deferredSearch = useDeferredValue(searchValue)

  const { data, isLoading } = useMovies(searchValue)

  const { results: movies } = data || {}

  if ((deferredSearch === '' && !isLoading) || deferredSearch.length < 2) {
    return null
  }

  return (
    <Wrapper role='listbox'>
      {!isLoading &&
        Array.isArray(movies) &&
        movies.map(movie => (
          <AutoCompleteResultItem
            key={movie.episode_id}
            searchValue={deferredSearch}
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
