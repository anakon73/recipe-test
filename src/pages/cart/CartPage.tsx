import { useCartStore } from '@/entity/recipe/store/CartStore'
import { Link } from 'react-router-dom'

export function CartPage() {
  const { cart, removeFromCart } = useCartStore()

  if (cart.length === 0) {
    return (
      <div>
        <Link
          className="
          bg-green-600 text-white rounded-md px-2 py-1 mb-5 inline-block
          "
          to="/"
        >
          Home
        </Link>
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div>
      <Link
        className="
        bg-green-600 text-white rounded-md px-2 py-1 mb-5 inline-block
        "
        to="/"
      >
        Home
      </Link>
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      <div className="mt-5">
        {cart.map(recipe => (
          <div
            key={recipe.id}
            className="space-y-1 p-2 border rounded-xl mb-5 w-full"
          >
            <img
              className="rounded-xl w-24"
              src={recipe.image}
              alt={`${recipe.name} image`}
            />
            <p className="text-xl font-medium">{recipe.name}</p>
            <p className="text-sm">{recipe.country}</p>
            <div className="space-x-2">
              <button
                type="button"
                className="bg-red-600 text-white rounded-md px-2 py-1"
                onClick={() => removeFromCart(recipe.id)}
              >
                Remove from Cart
              </button>
              <Link
                to={`/recipe/${recipe.id}`}
                className="bg-blue-600 text-white rounded-md px-2 py-1"
              >
                View More
              </Link>
            </div>
            <div className="flex gap-10">
              <div>
                <p className="font-semibold mb-1">Ingredients:</p>
                <ul className="text-sm whitespace-nowrap">
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
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Instruction:</p>
                <p className="text-sm">
                  {recipe.instruction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
