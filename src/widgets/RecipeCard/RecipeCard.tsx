import type { Ingredient } from '@/shared/types'
import { useCartStore } from '@/entity/recipe/store/CartStore'
import { Link } from 'react-router-dom'

interface Props {
  id: string
  name: string
  image: string
  country: string
  ingredients: Ingredient[]
  instruction: string
}

export function RecipeCard({
  id,
  country,
  image,
  name,
  ingredients,
  instruction,
}: Props) {
  const { addToCart, removeFromCart, cart } = useCartStore()

  const isInCart = cart.some(item => item.id === id)

  const handleAddToCart = () => {
    addToCart({ id, name, image, country, ingredients, instruction })
  }

  const handleRemoveFromCart = () => {
    removeFromCart(id)
  }

  return (
    <div className="space-y-1 p-2 border rounded-xl">
      <img className="rounded-xl" src={image} alt={`${name} image`} />
      <p className="text-xl font-medium">{name}</p>
      <p className="text-sm">{country}</p>
      <div className="flex justify-between">
        <Link
          to={`/recipe/${id}`}
          className="bg-blue-600 text-white rounded-md px-2 py-1"
          type="button"
        >
          View More
        </Link>
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
  )
}
