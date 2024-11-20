import { useQuery } from '@tanstack/react-query'
import {
  getRecipeById,
  type GetRecipeByIdParams,
  getRecipes,
  type GetRecipesParams,
} from './api'

const entity = 'recipe'
const Scopes = { All: 'all', ById: 'by-id' } as const

const keys = {
  getRecipes: (
    params: GetRecipesParams,
  ) => [{ entity, scope: Scopes.All, ...params }],
  byId: (
    params: GetRecipeByIdParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
}

export function useRecipes(params: GetRecipesParams) {
  return useQuery({
    queryKey: keys.getRecipes(params),
    queryFn: ({ queryKey: [{ query }] }) => getRecipes({ query }),
  })
}

export function useRecipeById(params: GetRecipeByIdParams) {
  return useQuery({
    queryKey: keys.byId(params),
    queryFn: ({ queryKey: [{ id }] }) => getRecipeById({ id }),
  })
}
