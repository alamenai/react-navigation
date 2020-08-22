import React from "react"
import PropTypes from "prop-types"
import withStyledButton from "./withStyledButton"

const commonClasses = ["bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline"]

const BrandButtonDefault = (props) => {
    let defaultClasses = ["w-26 py-2 text-base rounded-base mr-5"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, props)
}

const BrandButtonLarge = (props) => {
    let defaultClasses = ["w-full py-4 rounded-md outline-none cursor-pointer"]
    defaultClasses.push(commonClasses)
    return withStyledButton(defaultClasses, props)
}

export const Button = ({
    type,
    value,
    event,
    classes }) => {

    if (type === "submit") {
        return (<input
            className={classes}
            type={type}
            value={value}
            onSubmit={event} />)
    }

    if (type === "button") {
        return (<input
            className={classes}
            type={type}
            value={value}
            onClick={event} />)
    }

}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired,
    classes: PropTypes.string
}

export default BrandButtonDefault
export { BrandButtonLarge }
