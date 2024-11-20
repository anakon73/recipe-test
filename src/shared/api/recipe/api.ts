import type { ApiEndpointsAndSchemas } from '../lib'
import { API_URL } from '@/shared/config'
import axios from 'axios'
import { normalizeRecipe, normalizeRecipes } from './normalizer'
import { RecipesSchema } from './types'

const endpoints = {
  getRecipes: {
    url: ({ query }: GetRecipesParams) => `${API_URL}/search.php?s=${query}`,
    method: 'get',
    schema: RecipesSchema,
  },
  byId: {
    url: ({ id }: GetRecipeByIdParams) => `${API_URL}/lookup.php?i=${id}`,
    method: 'get',
    schema: RecipesSchema,
  },
} satisfies ApiEndpointsAndSchemas

export type GetRecipesParams = { query: string }
export async function getRecipes({ query }: GetRecipesParams) {
  const { url, method, schema } = endpoints.getRecipes

  const data = schema.parse(((await axios[method](url({ query }))).data))

  return normalizeRecipes(data)
}

export type GetRecipeByIdParams = { id: string }
export async function getRecipeById({ id }: GetRecipeByIdParams) {
  const { url, method, schema } = endpoints.byId

  const data = schema.parse(((await axios[method](url({ id }))).data)).meals[0]

  return normalizeRecipe(data)
}
