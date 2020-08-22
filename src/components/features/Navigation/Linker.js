import React from "react"
import * as ROUTES from "../../../constants/routes"
import { NavLink } from "react-router-dom"
import FeatureLink from "./Links/Features"

const Linker = () => (
    <nav >
        <ul className="flex text-white font-helvetica tracking-wide text-base">
            <FeatureLink />
            <li className="mr-8"><NavLink to={ROUTES.PRODUCTS.link} activeClassName="cursor-pointer text-orange-400"> {ROUTES.PRODUCTS.name}</NavLink></li>
            <li className="mr-8"><NavLink to={ROUTES.CUSTOMERS.link} activeClassName="cursor-pointer text-orange-400" >{ROUTES.CUSTOMERS.name}</NavLink></li>
            <li className="mr-8"><NavLink to={ROUTES.SALES.link} activeClassName="cursor-pointer text-orange-400">{ROUTES.SALES.name}</NavLink></li>
        </ul>
    </nav>
)
export default Linker