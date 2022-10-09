import { createContext, useContext, useEffect, useState, ReactNode } from "react"

//import { Alert } from "react-native"

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface AuthContextData {
    //user: FirebaseAuthTypes.User;
    signIn: (credentials : SignInCredentials) => void;
    signUp: (credentials : SignUpCredentials) => void;
    signOut: () => void;
    isLoading: boolean;
}

interface AuthProviderProps {
    children : ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children } : AuthProviderProps) {
    const [isLoading, setIsLoading] = useState(true)
    //const [userAuthenticated, setUserAuthenticated] = useState<FirebaseAuthTypes.User>({} as FirebaseAuthTypes.User)

    function signIn({ email, password }: SignInCredentials) {
        setIsLoading(true)
        
    }

    function signUp({ firstname, lastname, email, password }: SignUpCredentials) {
        setIsLoading(true)
    }

    function signOut() {

    }

    /*useEffect(() => {
        ...
    }, [])*/

    return (
        <AuthContext.Provider
            value={{
                //user: userAuthenticated,
                signIn,
                signUp,
                signOut,
                isLoading
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() : AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth, SignInCredentials, SignUpCredentials }