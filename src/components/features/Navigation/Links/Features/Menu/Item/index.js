import React from "react"
import { Link, } from "react-router-dom"

const Item = ({ name, route }) => {
    return < Link to={`/features/${route}`} className="text-gray-600 text-base-14 hover:text-brand" > {name}</Link>
}

export default Item