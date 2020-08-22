import React from "react"
import Email from "./Email"
import Password from "./Password"
import LoginButton from "./Submit"
const Form = () => {
    return (<form className="xs:w-11/12 xs:mt-2 xs:pb-4 
                             sm:w-1/2 sm:mt-10 sm:pb-6
                             md:w-2/5 md:mt-12 md:pb-8
                             lg:w-1/3 lg:mt-12 lg:pb-8
                             block-inline bg-gray-100 rounded-lg mx-auto w-1/4 pb-16 px-8 pt-4 mt-24">
        <Email />
        <Password />
        <LoginButton />
    </form>)
}
export default Form