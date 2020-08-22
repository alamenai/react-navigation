import React from "react"
import Statement, { GetStartedButton } from "../../components/features/Statement"
const Home = () => (
    <div className="mt-10 flex flex-col items-center pb-24">
        <Statement />
        <GetStartedButton />
    </div>
)
export default Home