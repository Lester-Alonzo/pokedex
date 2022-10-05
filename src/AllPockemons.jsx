import {useQuery, gql, NetworkStatus} from '@apollo/client';
import styles from './styles/allpocke.module.css';
import PockemonCard from './pockemoncard';
import {usePockemon} from './context/pockemoncontext'
import PokeBall from './pokeball';


const AllPockemons = () => {
    const {loading, error, data } = usePockemon()
    
    if (loading) return <PokeBall />;
    if (error) return <div>Error :( {error.message}</div>;
    return (
        <div className={styles.carrucell}>
        {data.pokemons.results.map((pokemon) => (
            <PockemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} artwork={pokemon.artwork} id={pokemon.id}/>
        ))}
        {/* <button onClick={() => refetch({limit: 10, offset: 2})}>refetch new</button> */}
</div>
    );
}

export default AllPockemons;