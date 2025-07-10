import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextType {
    user: string | null;
    signIn: (newUser: string, callback: () => void) => void;
    signOut: (callback: () => void) => void;
}


const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState(() => localStorage.getItem('user') || null)

    const signIn = (newUser: string, callback: () => void) => {
        setUser(newUser)
        localStorage.setItem("user", newUser)
        callback()
    }

    const signOut = (callback: () => void) => {
        setUser(null)
        localStorage.removeItem("user")
        callback()
    }

    const value = {
        user,
        signIn,
        signOut
    }

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}