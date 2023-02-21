import { useEffect } from "react"

export function ResearchInput(props){

    
    useEffect( () => {
       fetch(`https://api.tvmaze.com/search/shows?q=${props.search}`)
        .then(response => response.json())
        .then(data => props.setDatas(data))
    }, [props.search])
    
    

    const handleChange = (e) =>{
        props.setSearch(e.target.value)
    }


    return(
        <>
        <form>
            <input type="text" name="text" placeholder="Rechercher un film..." value={props.search} onChange={handleChange} />
        </form>
        </>
    )
}