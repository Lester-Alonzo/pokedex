import { useState } from 'react'
import {usePockemon} from './context/pockemoncontext'
import styles from './styles/onlyone.module.css';
import PokeBall from './pokeball';
import Moves from './moves'
import Types from './types'
const OnlyOne = () => {
    const [shiny, setShiny] = useState(false)
    const {okdata, okloading, okerror} = usePockemon()
    if(okloading) return <PokeBall />
    if(okerror ) return <p>Error 😥 : {okerror.message}</p>
    if(okdata.pokemon.name == null) return <p>Not found</p>
    const handleClick = () => {
        setShiny(!shiny)
    }
    return(
        <div className={styles.onlyonecontainer}>
        <div style={{display:"flex", alignItems:"center"}}>
            <h1 style={{textShadow:"2px 2px 1px white"}}>{okdata.pokemon.name}</h1>
            <button className={styles.starshiny} style={{}} onClick={handleClick} title="see shiny">⭐</button>
        </div>
        {shiny ? <img className={`${styles.image} ${styles.shiny}`}  src={okdata.pokemon.sprites.front_shiny} alt=""/> : <img className={styles.image} src={okdata.pokemon.sprites.front_default} alt=""/>}
        <Types types={okdata.pokemon.types}/>
        <Moves moves={okdata.pokemon.moves}/>
        </div>
    )
}
export default OnlyOne