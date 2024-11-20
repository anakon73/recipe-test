import type { Ingredient, Recipe, Recipes } from '@/shared/types'
import type { z } from 'zod'
import type { RecipeSchema, RecipesSchema } from './types'

export function normalizeRecipe(recipe: z.infer<typeof RecipeSchema>): Recipe {
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const index = i + 1
    const ingredientKey = `strIngredient${index}` as keyof typeof recipe
    const measureKey = `strMeasure${index}` as keyof typeof recipe

    const ingredient = recipe[ingredientKey]?.trim()
    const measure = recipe[measureKey]?.trim()

    return ingredient
      ? { name: ingredient, measure: measure || '' }
      : null
  }).filter(Boolean) as Ingredient[]

  return {
    ingredients,
    ...recipe,
  }
}

export function normalizeRecipes(
  recipes: z.infer<typeof RecipesSchema>,
): Recipes {
  return {
    meals: recipes.meals.map(normalizeRecipe),
  }
}
