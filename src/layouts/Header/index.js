import React, { Fragment } from "react"
import Logo from "../../components/features/Logo"
import SignUpButton from "../../components/features/Signup"
import SearchField from "../../components/features/Search"
import Navigation from "../../components/features/Navigation"
import { LoginLink } from "../../components/features/Login"

const Header = () => (
    <Fragment>
        <header className="flex justify-start bg-brand-dark h-20 py-5 px-10 items-center">
            <Logo />
            <SearchField />
            <Navigation />
            <div className="ml-auto">
                <SignUpButton />
                <LoginLink />
            </div>
        </header>
    </Fragment>)

export default Header