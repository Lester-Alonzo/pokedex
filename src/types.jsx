import styles from "./styles/types.module.css"
import imgs from "./utils/imgs"
const Types = ({ types }) => {
  return (
    <div className={styles.typescontainer}>
      {types.map((type, index) => (
          <img src={imgs[type.type.name]} alt={type.type.name} className={styles.image} key={index}/>
      ))}
    </div>
  )
}

export default Types
