async function fetchPokemons(pokemonNames: string[]): Promise<any> { 
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/"; 
 
  const fetchPokemonData = async (name: string): Promise<any> => { 
    const response = await fetch(`${apiUrl}${name}`); 
    if (!response.ok) { 
      throw new Error("smth went wrong"); 
    } 
    const pokemon = await response.json(); 
    return { 
      id: pokemon.id, 
      name: pokemon.name, 
      height: pokemon.height, 
      weight: pokemon.weight, 
      image: pokemon.sprites?.front_default, 
    }; 
  }; 
 
  try { 
    const pokemonPromises = pokemonNames.map(fetchPokemonData); 
    return Promise.all(pokemonPromises); 
  } catch (error) { 
    return Promise.reject(new Error("smth went wrong")); 
  } 
} 
 
export default fetchPokemons;