import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../../../constants/routes"

const Login = () => (
    <Link
        className="text-white font-helvetica text-base-14 font-medium tracking-wider"
        to={ROUTES.LOGIN.link} >
        {ROUTES.LOGIN.name}
    </Link >)

export default Login