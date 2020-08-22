import React from "react"

const Label = ({ forInput, value }) => (
    <label htmlFor={forInput}
        name={value}
        className="font-medium text-gray-600">
        {value}
    </label>
)

export default Label