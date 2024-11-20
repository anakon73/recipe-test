import type { Categories, Category } from '@/shared/types'
import type { z } from 'zod'
import type { CategoriesSchema, CategorySchema } from './types'

export function normalizeCategory(
  category: z.infer<typeof CategorySchema>,
): Category {
  return {
    ...category,
  }
}

export function normalizeCategories(
  categories: z.infer<typeof CategoriesSchema>,
): Categories {
  return {
    categories: categories.categories.map(normalizeCategory),
  }
}
