import React from "react"
import {useHistory} from "react-router-dom"
import {HOME} from "../../../constants/routes"

const Search = () => {
    
    const history=useHistory()
    const onSearch=()=>{
        history.push(HOME.link)
    }    
    return <form className="mr-32 w-1/4
                            xs:text-base xs:ml-2 xs:mr-1 xs:w-full
                            sm:text-base sm:ml-3 sm:mr-2 sm:w-2/5 
                            md:text-base md:ml-3 md:mr-2 md:w-2/5 
                            lg:text-base lg:ml-4 md:mr-4 lg:w-1/4"  
                            onSubmit={onSearch} >
        <input
        className=" 
                   py-2 focus:shadow-outline font-helvetica outline-none
                   rounded-full ml-5 px-5 font-medium placeholder-gray-400
                   tracking-wide w-full"
        type="search"
        name="search"
        placeholder="Search timber"
        aria-label="Search"
        aria-required="false"
    />
    </form>
}

export default Search