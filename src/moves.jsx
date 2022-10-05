import styles from './styles/moves.module.css'
const Moves = ({ moves }) => {
    return (
        <>
        <h3 className={styles.title}>moves</h3>
        <div className={styles.movescontainer}>
        {moves.map((move, index) => (
            <p key={index} className={styles.move}>{move.move.name}</p>
        ))}
        </div>
</>
    );
    }

export default Moves;