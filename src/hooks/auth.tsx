import React, { createContext, ReactNode, useContext } from 'react'

import * as AuthSession from 'expo-auth-session'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  name: string
  email: string
  photo?: string
}

interface IAuthContextData {
  user: User
  signInWithGoogle: () => void
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '123',
    name: 'John Doe',
    email: 'okdaospkopsa'
  }

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        '606207774632-rl11m065iph5evosrq2699q09ab8lg88.apps.googleusercontent.com'
      const REDIRECT_UTI = 'https://auth.expo.io/@thiagominguim/gofinances'
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_UTI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const response = await AuthSession.startAsync({ authUrl })
      console.log(response)
    } catch (error) {
      throw new Error(error as any)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
