// import React, { useState } from 'react'
// import Axios from 'axios'
// import './Pokedex.css'



// const pokedex = () => {
//     const [pokemonName , setPokemonName] = useState('')
     
//     const [pokemonChoosen, setPokemonChoosen] = useState(false)
//     const [pokemon, setPokemon]= useState({
//         name: "",
//         number: "",
//         species: "",
//         image: "",
//         hp: "",
//         attack: "",
//         defense: "",
//         speed: "",
//         type: "",
//         })
//     const searchPokemon = ()=>{Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
//         (res)=>{setPokemon({
//             name: res.data.name,
//             number: res.data.id,
//             species: res.data.species.name,
//             image: res.data.sprites.front_default,
//             hp: res.data.stats[0].base_stat,
//             attack:res.data.stats[1].base_stat,
//             defense: res.data.stats[2].base_stat,
//             speed: res.data.stats[5].base_stat,
//             type: res.data.types[0].type_name,
//         }),setPokemonChoosen(true)             
//         }
//     )}
 
//   return (
//     <div className='TitleSection'>
//         <h1>Pokédex</h1>
//         <input type='text'
     
//         onChange={(event)=> setPokemonName(event.target.value.toLocaleLowerCase())} 
//         />
//          <br/>
//        {pokemonName && <button onClick={searchPokemon}>Busca el Pokémon</button>}
//         <div className='DisplaySection'>
//             {!pokemonChoosen ? (<h1>Por favor escoja un pokémon por su nombre o su numero de pokédex</h1>)
//             :(
//         <>
       
// <div>
// <h1>{pokemon.name}</h1>
// <img src={pokemon.image} alt={pokemon.name} />
//         </div><div>
// <h3>Number: #{pokemon.number}</h3>
// <h3>Species: {pokemon.species}</h3>
// <h3>Type: {pokemon.type}</h3>
// <h4>Hp: {pokemon.hp}</h4>
// <h4>Attack: {pokemon.attack}</h4>
// <h4>Defense: {pokemon.defense}</h4>
// <h4>Speed: {pokemon.speed}</h4>
// </div>
// </>
// )}
    
//         </div>

//     </div>
//   )
// }

// export default pokedex