import React from "react"
import * as ROUTES from "../../../constants/routes"
import { NavLink } from "react-router-dom"
import FeatureLink from "./Links/Features"

const Linker = () => (
    <nav>
        <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
            <FeatureLink />
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.PRODUCTS.link} activeClassName="cursor-pointer text-orange-400"> {ROUTES.PRODUCTS.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.CUSTOMERS.link} activeClassName="cursor-pointer text-orange-400" >{ROUTES.CUSTOMERS.name}</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.SALES.link} activeClassName="cursor-pointer text-orange-400">{ROUTES.SALES.name}</NavLink></li>
        </ul>
    </nav>
)
export default Linker