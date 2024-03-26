import { api } from '@/utls'
import { useQuery } from '@tanstack/react-query'

import { MovieResponse } from '@/types'

const fetchMovies = async (search: string) => {
  const response = await api('/films', { search })
  return response
}

export const useMovies = (search: string) => {
  const query = useQuery<MovieResponse>({
    queryKey: ['films', search],
    queryFn: () => fetchMovies(search),
    enabled: search !== '' && search.length > 1,
  })

  return query
}
