import type { ApiEndpointsAndSchemas } from '../lib'
import { API_URL } from '@/shared/config'
import axios from 'axios'
import { normalizeCategories } from './normalizer'
import { CategoriesSchema } from './types'

const endpoints = {
  getCategories: {
    url: `${API_URL}/categories.php`,
    method: 'get',
    schema: CategoriesSchema,
  },
} satisfies ApiEndpointsAndSchemas

export async function getCategories() {
  const { url, method, schema } = endpoints.getCategories

  const data = schema.parse(((await axios[method](url)).data))

  return normalizeCategories(data)
}
