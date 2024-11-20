import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from './query'
import { AppRoutes } from './router'

export function AppProviders() {
  return (
    <QueryProvider>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      >
        <AppRoutes />
      </BrowserRouter>
    </QueryProvider>
  )
}
