import React from "react"
import { Link } from "react-router-dom"
import { OutlineField as PasswordField } from "../../../../library/Textfield"
import Label from "../../../../library/Label"


const Password = () => {

    const password = {
        type: "password",
        id: "password",
        placeholder: "••••••••••",
        isFocused: false
    };

    return < div className="mt-3 flex flex-col" >
        <div className="flex items-baseline">
            <Label value="password" />
            <ForgotPasswordLink />
        </div>
        <PasswordField {...password} />
    </div >
}

const ForgotPasswordLink = () => (
    <Link to="/forgot-password" className="ml-auto text-xs font-helvetica font-medium text-brand">
        Forgot password?
    </Link>
)

export default Password