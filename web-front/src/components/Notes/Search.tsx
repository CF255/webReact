import { useState } from "react"

const SearchNotes = (props) =>{

    const [term, setTerm] = useState('')

    function handleSearch(e){
        const {value} = e.target
        setTerm(value)
        props.onSearch(value)

    }

    return(
        <>
        <input type="text" placeholder="Search" value={term} onChange={handleSearch} />
        </>
    )
}

export default SearchNotes