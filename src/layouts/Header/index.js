import React, { Fragment } from "react"
import Logo from "../../components/features/Logo"
import SignUpButton from "../../components/features/Signup"
import SearchField from "../../components/features/Search"
import Navigation from "../../components/features/Navigation"
import { LoginLink } from "../../components/features/Login"

const Header = () => (
    <Fragment>
        <header className="xs:px-2 sm:py-2
                           sm:px-6 sm:py-3
                           md:px-8 sm:py-4
                           flex justify-start bg-brand-dark py-4 px-10 items-center ">
            <Logo />
            <SearchField />
            <div className="flex flex-grow items-center">
                <div className="xs:hidden sm:hidden md:hidden">
                <Navigation/>
                </div>
            <div className="flex xs:hidden items-center ml-auto">
                <SignUpButton />
                <LoginLink />
            </div>
            </div>
        </header>
    </Fragment>)

export default Header