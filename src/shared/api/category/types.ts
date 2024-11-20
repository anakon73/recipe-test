import { z } from 'zod'

export const CategorySchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
  strCategoryThumb: z.string(),
  strCategoryDescription: z.string(),
})

export const CategoriesSchema = z.object({
  categories: z.array(CategorySchema),
})
