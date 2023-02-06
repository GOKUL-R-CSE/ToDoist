import { useState } from "react";

import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
        console.log("Entered useSignup")
        const response = await fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            // update auth content
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }

    }
    return { login, isLoading, error }

}
