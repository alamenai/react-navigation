import React from "react"
import Email from "./Email"
import Password from "./Password"
import LoginButton from "./Submit"
const Form = () => {
    return (<form className="block-inline bg-gray-100 rounded-lg mx-auto w-1/4 pt-8 pb-16 px-8">
        <Email />
        <Password />
        <LoginButton />
    </form>)
}
export default Form