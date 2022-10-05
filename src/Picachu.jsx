import {useQuery, gql} from '@apollo/client'
const query = gql`
  query {
    pokemon(name: "pikachu") {
      id
      name
      sprites {
        front_default
      }
    }
  }
`

const Picachu = () => {
  const {loading, error, data} = useQuery(query)
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error :(</div>
  return (
    <div>
      <span>{data.pokemon.id}</span>
      <h1>{data.pokemon.name}</h1>
      <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />
    </div>
  )
}

export default Picachu