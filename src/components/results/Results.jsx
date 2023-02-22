import { Link } from "react-router-dom";

export function Results(props) {

  return (
    <div>
      <h2>{props.name}</h2>
      <a href={props.url}>{props.url}</a>
      <div dangerouslySetInnerHTML={{ __html: props.summary }} />
      <img src={props.img} alt={props.name}></img>
      <Link to={`/show/${props.id}`}>Plus d'informations</Link>
    </div>
  )
}

