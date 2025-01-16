import React from 'react'
import { AuthContext } from '../ContextApi'

const AuthProvider = ({children}) => {

    const shearInfo = {
        name: "mahedi"
    }

  return (
    <AuthContext.Provider value={shearInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
