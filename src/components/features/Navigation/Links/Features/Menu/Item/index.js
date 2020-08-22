import React from "react"
import { Link } from "react-router-dom"

const Item = ({ name, route }) => (
    < Link to={`/features/${route}`} className="text-gray-700 text-base-14 hover:text-brand" > {name}</Link>)

export default Item