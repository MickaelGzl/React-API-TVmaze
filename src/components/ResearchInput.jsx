import { useEffect } from "react"
import DOMPurify from 'dompurify'


export function ResearchInput(props){

    
    useEffect( () => {
       fetch(`https://api.tvmaze.com/search/shows?q=${props.search}`)
        .then(response => response.json())
        .then(data => props.setDatas(data))
        .catch(error => console.log(`Error: ${error}`))
    }, [props.search])
    
    
    const handleChange = (e) =>{
        // props.setSearch(DOMPurify.sanitize(e.target.value))
        props.setSearch(DOMPurify.sanitize(e.target.value))
    }


    return(
        <>
        <form>
            <input type="text" name="text" placeholder="Rechercher un film..." value={props.search} onChange={handleChange} />
        </form>
        </>
    )
}