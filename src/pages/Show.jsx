import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify'

export function Show(){

    const params = useParams()
    const [result, setResult] = useState([])

    useEffect( ()=>{
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
        .then(response => response.json())
        .then(data => setResult(data))
    },[params.id])

    let clean = DOMPurify.sanitize(result.summary)
  

    console.log(result._embedded)
    return(
        <div>
      <h2>{result.name}</h2>
      <h5>{result.type}, {result.language}</h5>
      <h5>Première diffusion le {result.premiered},{result.status}</h5>
      <h5>Note moyenne: {result.rating?.average}</h5>
      <a href={result.url}>{result.url}</a>
      <div dangerouslySetInnerHTML={{ __html: clean}} />
      <img src={result.image?.medium} alt={result.name}></img>
      <div> Genres:
        {result.genres != null && result.genres.map( genre => (
            <span key={genre}> {genre},</span>
        ))}
      </div>
      <ul>
        Casting: {result._embedded?.cast?.length > 0 && result._embedded.cast.map(actor => (
         <li key={actor.person.name}>{actor.person.name}: {actor.character.name} {actor.self && '(self)'}{actor.voice && '(voix)'}</li>
        ))}
      </ul>
    </div>
    )
}