import { FilterForm } from '@/features/recipe/filter-form/FilterForm'
import { useRecipes } from '@/shared/api/recipe'
import { RInput } from '@/shared/ui/RInput'
import { RPagination } from '@/shared/ui/RPagination'
import { RecipeCard } from '@/widgets/RecipeCard'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export function RecipesPage() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleFilterChange = (categories: string[]) => {
    setSelectedCategories(categories)
  }

  const { data: recipes } = useRecipes({ query })

  const filteredRecipes = useMemo(() => {
    if (!recipes || !recipes.meals.length)
      return []

    if (selectedCategories.length === 0)
      return recipes.meals

    return recipes.meals.filter(meal =>
      selectedCategories.includes(meal.strCategory),
    )
  }, [recipes, selectedCategories])

  const currentPageRecipes = useMemo(() => {
    const startIndex = (page - 1) * 6
    const endIndex = startIndex + 6

    return filteredRecipes.slice(startIndex, endIndex)
  }, [filteredRecipes, page])

  const totalPages = useMemo(() => {
    if (recipes) {
      return Math.ceil(recipes.meals.length / 6)
    }

    return 0
  }, [recipes])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    setPage(1)
  }

  return (
    <div>
      <Link
        className="
        bg-green-600 text-white rounded-md px-2 py-1 mb-5 inline-block
        "
        to="/cart"
      >
        Cart
      </Link>
      <div className="mb-5">
        <RInput onSearch={handleSearch} />
      </div>
      <div className="flex gap-10">
        <FilterForm
          selectedCategories={selectedCategories}
          onChange={handleFilterChange}
        />
        {currentPageRecipes.length === 0
          ? (
              <h1>
                Not found recipes
              </h1>
            )
          : (
              <div className="grid grid-cols-3 gap-5">
                {currentPageRecipes.map(recipe => (
                  <RecipeCard
                    id={recipe.idMeal}
                    key={recipe.idMeal}
                    name={recipe.strMeal}
                    country={recipe.strArea}
                    image={recipe.strMealThumb}
                    ingredients={recipe.ingredients}
                    instruction={recipe.strInstructions}
                  />
                ))}
              </div>
            )}
      </div>
      <RPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={e => setPage(e)}
      />
    </div>
  )
}
