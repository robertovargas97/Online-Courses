import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'

export const CharactersApp = () => {
  const component = (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )

  return component
}
