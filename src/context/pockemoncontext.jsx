import {createContext, useContext, useState, useEffect} from 'react'
import {GET_POKEMONS, GET_POKEMON_INFO} from '../utils/querys'
import {useQuery, useLazyQuery} from '@apollo/client'

const PockemonContext = createContext()

const PockemonProvider = ({children}) => {
    const {loading, error, data, refetch, networkStatus} = useQuery(GET_POKEMONS, {
        variables: {
            limit: 1000,
            offset: 0
        },
        //pollInterval: 500 //este nos dice que cada 0.5 segundos se refresque la pagina para tener los datos actualizados
    });
    const [getPokemon, {loading: okloading, error: okerror, data: okdata}] = useLazyQuery(GET_POKEMON_INFO)

   const [onlyOne, setOnlyOne] = useState(false) 
   function changeOnlyOne(state) {
         setOnlyOne(state)
   }
    return (
        <PockemonContext.Provider value={{loading, error, data, changeOnlyOne, onlyOne, getPokemon, okdata, okerror, okloading }}>
        {children}
        </PockemonContext.Provider>
    )
    }

export const usePockemon = () => useContext(PockemonContext)

export default PockemonProvider