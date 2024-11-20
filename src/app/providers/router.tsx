import { CartPage } from '@/pages/cart'
import { RecipePage } from '@/pages/recipe'
import { RecipesPage } from '@/pages/recipes'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
