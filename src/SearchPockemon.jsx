import { useState } from 'react';
import {usePockemon} from './context/pockemoncontext'
import styles from './styles/search.module.css';



const SearchPockemon = () => {
    const [pkname, setPkName] = useState('');
    const {getPokemon, changeOnlyOne, onlyOne} = usePockemon()

    const handleSubmit = (e) => {
        e.preventDefault()
        changeOnlyOne(true)
        getPokemon({variables: {name: pkname}});
    };
    const handleChange = (e) => {
        setPkName(e.target.value);
    };
    const close = () => {
        changeOnlyOne(false)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} className={styles.input} placeholder="🔎"/>
            {onlyOne && <button type="button" onClick={close} className={styles.closebutton}>❌</button>}
        </form>
        </>
    );
}
export default SearchPockemon;