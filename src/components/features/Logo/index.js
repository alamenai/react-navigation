import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"

const Logo = () => (
    <Link to={HOME.link} className="font-bold text-white text-2xl ">
        <span className="flex flex-col bg-brand w-10 h-10 rounded-full justify-center items-center text-center cursor-pointer
        ">
            t
        </span>
    </Link>)

export default Logo