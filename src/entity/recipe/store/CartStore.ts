import type { Ingredient } from '@/shared/types'
import { create } from 'zustand'

interface Recipe {
  id: string
  name: string
  image: string
  country: string
  ingredients: Ingredient[]
  instruction: string
}

interface CartState {
  cart: Recipe[]
  addToCart: (recipe: Recipe) => void
  removeFromCart: (id: string) => void
}

export const useCartStore = create<CartState>(set => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  addToCart: (recipe: Recipe) => {
    set((state) => {
      const updatedCart = [...state.cart, recipe]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    })
  },
  removeFromCart: (id: string) => {
    set((state) => {
      const updatedCart = state.cart.filter(recipe => recipe.id !== id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return { cart: updatedCart }
    })
  },
}))
