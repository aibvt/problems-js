async function fetchPokemon(pokemonName: string) { 
    try { 
      const response = await fetch( 
        https://pokeapi.co/api/v2/pokemon/${pokemonName} 
      ); 
      const data = await response.json(); 
   
      if (!response.ok) { 
        throw new Error("smth went wrong"); 
      } 
   
      const result = { 
        id: data.id, 
        name: data.name, 
        height: data.height, 
        weight: data.weight, 
        image: data.sprites.front_default, 
      }; 
   
      return result; 
    } catch (error) { 
      throw new Error("smth went wrong"); 
    } 
  } 
   
  export default fetchPokemon;