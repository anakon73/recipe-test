import { useCartStore } from '@/entity/recipe/store/CartStore'
import { useRecipeById } from '@/shared/api/recipe'
import { Link, useParams } from 'react-router-dom'

export function RecipePage() {
  const { id } = useParams()

  const { addToCart, removeFromCart, cart } = useCartStore()

  const { data: recipe } = useRecipeById({ id: id! })

  if (recipe === undefined || recipe === null) {
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
        {' '}
        <h1>Not found recipe</h1>
      </div>
    )
  }

  const isInCart = cart.some(item => item.id === id)

  const handleAddToCart = () => {
    addToCart({
      id: recipe.idMeal,
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      country: recipe.strArea,
      ingredients: recipe.ingredients,
      instruction: recipe.strInstructions,
    })
  }

  const handleRemoveFromCart = () => {
    removeFromCart(recipe.idMeal)
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
      <h1 className="text-4xl font-medium mb-5">{recipe.strMeal}</h1>
      <div className="flex gap-10">
        <img className="w-1/2 rounded-xl" src={recipe?.strMealThumb} alt={`${recipe.strMeal} image`} />
        <div>
          <div className="space-y-2 mb-5">
            <p className="text-xl mb-5">Ingredients</p>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                <p>
                  {ingredient.name}
                  :
                  {' '}
                  {ingredient.measure}
                </p>
              </div>
            ))}
          </div>
          {isInCart
            ? (
                <button
                  className="bg-red-600 text-white rounded-md px-2 py-1"
                  type="button"
                  onClick={handleRemoveFromCart}
                >
                  Remove from Cart
                </button>
              )
            : (
                <button
                  className="bg-green-600 text-white rounded-md px-2 py-1"
                  type="button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
        </div>
      </div>
      <p>
        Country:
        {' '}
        {recipe.strArea}
      </p>
      <a
        className="text-blue-600 visited:text-purple-600"
        href={recipe.strYoutube}
        target="_blank"
      >
        Video Recipe
      </a>
    </div>
  )
}
