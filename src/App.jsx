import React from 'react';
import Pokemon from './Pokemon';



function App() {
 const[pokemon, setPokemon] = React.useState(null); 

 React.useEffect(() => {
    const pokemonLocal = window.localStorage.getItem('pokemon');
    if(pokemonLocal !== setPokemon(pokemonLocal));
 }, [])

 React.useEffect(() => {
  if (pokemon !== null) window.localStorage.setItem('pokemon', pokemon)
}, [pokemon]);

 function handleClick({target}) {
    setPokemon(target.innerText);
 }

  return (
    <div>
      <h1>Principais Pokemons: {pokemon}</h1>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>bulbasaur</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>charmander</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>squirtle</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>caterpie</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>weedle</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>pidgey</button>
      <button  onClick={handleClick} style={{marginRight: '1rem'}}>rattata</button>
      <Pokemon pokemon={pokemon}/>
     
    </div>
   
  )
}

export default App;
