import { useQuery } from '@tanstack/react-query'
import { getCategories } from './api'

const entity = 'category'
const Scopes = { All: 'all' } as const

const keys = {
  getCategories: () => [{ entity, scope: Scopes.All }],
}

export function useCategories() {
  return useQuery({
    queryKey: keys.getCategories(),
    queryFn: () => getCategories(),
  })
}
