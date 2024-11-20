export type Ingredient = {
  name: string
  measure: string
}

export interface Recipe {
  idMeal: string
  strMeal: string
  strDrinkAlternate: null
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string | null
  strYoutube: string
  ingredients: Ingredient[]
  strSource: string | null
  strImageSource: null
  strCreativeCommonsConfirmed: null
  dateModified: null
};

export interface Recipes {
  meals: Recipe[]
}
