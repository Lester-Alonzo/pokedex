import {gql} from '@apollo/client'

export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            nextOffset
            prevOffset
            status
            message
            results {
                url
                name
                image
                artwork
                id
            }
        }
    }
`;

export const GET_POKEMON_INFO = gql`
 query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            weight
            height
          moves{
            move{
              name
            }
          }
          types{
            type{
              name
            }
          }
            sprites {
              
                front_default
              front_shiny
            }
        }
    }
`;