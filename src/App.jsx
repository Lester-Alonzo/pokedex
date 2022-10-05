import styles from './styles/app.module.css';
import SearchPockemon from './SearchPockemon'
import AllPockemons from './AllPockemons';
import OnlyOne from './onlyone'
import {usePockemon} from './context/pockemoncontext'
export default function App() {
  const {onlyOne} = usePockemon()
  return <div className={styles.pokedex}>
    <SearchPockemon/>
    {onlyOne ? <OnlyOne/> : <AllPockemons/>}
  </div>
}