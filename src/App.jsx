import { useState } from 'react'
import './App.css'
import { ResearchInput } from './components/ResearchInput'
import { Results } from './components/results/Results'

function App() {
  const [search, setSearch] = useState('')
  const[datas, setDatas] = useState([])
  

  return (
    <div className="App">
      <h1>Rechercher un film sur TVmaze</h1>
      {search.trim() != '' && <p>Il y a {datas.length} résultats pour le therme de recherche {search}</p> }
      <ResearchInput search={search} setSearch={setSearch} datas={datas} setDatas={setDatas} />
      {datas.length > 0 && datas.map(data => (
        <Results key={data.show.id} name={data.show.name} url={data.show.url} summary={data.show.summary} img={data.show.image?.medium}/>
      ))}
    </div>
  )
}

export default App
