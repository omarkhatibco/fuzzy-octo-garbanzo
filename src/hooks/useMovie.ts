import { api } from '@/utls'
import { useQuery } from '@tanstack/react-query'

const fetchMovies = async (search: string) => {
  const response = await api('/films', { search })
  return response
}

export const useMovies = (search: string) => {
  const query = useQuery({
    queryKey: ['films', search],
    queryFn: () => fetchMovies(search),
    enabled: search !== '',
  })

  return query
}
