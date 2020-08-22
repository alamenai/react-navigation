import React from "react"
import { BrandButtonLarge as SignInButton } from "../../../../library/Button"


const LoginButton = () => {

    const login = (e) => e.preventDefault()

    return <SignInButton
        type="submit"
        value="Sign in"
        event={login}
        classes="mt-8" />
}

export default LoginButton