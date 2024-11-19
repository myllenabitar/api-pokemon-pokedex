import React from 'react';


function Pokemon({pokemon}) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if(pokemon !== null)
     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then((json) => setDados(json));
  },[pokemon]);
 
  if(dados === null) return null;
  return (
    <div>
      <h1>{dados.name}</h1>
      <img src={dados.sprites?.front_default} alt={dados.name} style={{ width: '150px', height: '150px' }}/>
      <h3>Tipos:</h3>
      <ul>
        {dados.types.map((typeObj, index) => (
          <li key={index}>{typeObj.type.name}</li>
        ))}
      </ul>
      <h3>Habilidades:</h3>
      <ul>
        {dados.abilities.map((abilityObj, index) => (
          <li key={index}>{abilityObj.ability.name}</li>
        ))}
      </ul>
      <h3>Status Base:</h3>
      <ul>
        {dados.stats.map((statObj, index) => (
          <li key={index}>
            {statObj.stat.name}: {statObj.base_stat}
          </li>
        ))}
      </ul>
   
    </div>
  )
}

export default Pokemon;