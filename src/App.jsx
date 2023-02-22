import { useState, useContext } from 'react'
import './App.css'
import { ResearchInput } from './components/ResearchInput'
import { Results } from './components/results/Results'
import { ThemeContext } from '../src/ThemeContext'

function App() {
  const[darkMode, setDarkMode] = useState([false, 'activer le mode sombre'])
  const [search, setSearch] = useState('')
  const[datas, setDatas] = useState([])
  
  function handleClick(){
    darkMode[0]?
    setDarkMode([false, 'activer le mode sombre']) :
    setDarkMode([true, 'désactiver le mode sombre'])
  }


  return (
    <ThemeContext.Provider value={darkMode[0]}>
    <div className="App" style={darkMode[0]? { backgroundColor: '#fff', color: '#000' } : { backgroundColor: '#222', color: '#fff' } }>
      <label className="switch">
        <input type="checkbox" onChange={handleClick} />
        <span className='slider'></span>
      </label>
      <h1>Rechercher un film sur TVmaze</h1>
      {search.trim() != '' && <p>Il y a {datas.length} résultats pour le therme de recherche {search}</p> }
      <ResearchInput search={search} setSearch={setSearch} datas={datas} setDatas={setDatas} />
      {datas.length > 0 && datas.map(data => (
        <Results key={data.show.id} id={data.show.id} name={data.show.name} url={data.show.url} summary={data.show.summary} img={data.show.image?.medium}/>
      ))}
    </div>
    </ThemeContext.Provider>
  )
}

export default App
