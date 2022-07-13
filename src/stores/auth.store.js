import { createContext, useState } from 'react'

const AuthStore = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthProvider value={{ auth, setAuth }}>
            {children}
        </AuthProvider>
    )
}

export default AuthStore
