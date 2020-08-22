import React from "react"
import { BrandButtonLarge as SignInButton } from "../../../../library/Button"


const LoginButton = () => {

    const login = (e) => e.preventDefault()

    return <SignInButton
        type="submit"
        value="Sign in"
        event={login}
        classes="xs:py-3 sm:py-3 md:py-3 xl:py-3 lg:py-3 mt-8" />
}

export default LoginButton