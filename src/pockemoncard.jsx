import styles from './styles/card.module.css';
import {usePockemon} from './context/pockemoncontext';
const PockemonCard = ({ name, image, artwork , id}) => {
    const {getPokemon, changeOnlyOne} = usePockemon()
    const handleClick = () => {
        getPokemon({variables: {name: name}})
        changeOnlyOne(true)
    }
    return (
        <div className={styles.card} title={name} onClick={handleClick}>
            <img src={image} alt={name} />
            <div className={styles.texto}>
                <h2>{id}</h2>
            </div>
        </div>
    );
}

export default PockemonCard;