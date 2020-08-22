import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../layouts/Header"
import { Switcher } from "../components/features/Navigation"
import HeaderMobile from "../layouts/Header/mobile"

class App extends React.Component {
    render() {
        return (<div>
            <Router >
                <Header />
                <Switcher />
                <HeaderMobile forMobile={true} />
            </Router>
        </div>
        )
    }
}
export default App