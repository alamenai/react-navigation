import React from "react"

const Search = () => (
    <input
        className="xs:text-base xs:ml-2 xs:mr-1 xs:w-full
                   sm:text-base sm:ml-3 sm:mr-2 sm:w-2/5 
                   md:text-base md:ml-3 md:mr-2 md:w-2/5 
                   lg:text-base lg:ml-4 md:mr-4 lg:w-1/4 
                   py-2 focus:shadow-outline font-helvetica outline-none
                   rounded-full ml-5 mr-20 px-5 font-medium placeholder-gray-400
                   tracking-wide xl:w-1/4"
        type="search"
        placeholder="Search timber"
    />
)
export default Search