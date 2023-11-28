async function fetchCharacterWithMovies(characterId) { 
  const api = "https://swapi.dev/api"; 
  const characterUrl = ${api}/people/${characterId}/; 
 
  try { 
    const characterResponse = await fetch(characterUrl); 
    if (!characterResponse.ok) { 
      throw new Error("smth went wrong"); 
    } 
    const characterData = await characterResponse.json(); 
 
    const filmsPromises = characterData.films.map(async filmUrl => {      
      const filmResponse = await fetch(filmUrl); 
      if (!filmResponse.ok) { 
        throw new Error("smth went wrong"); 
      } 
      const filmData = await filmResponse.json(); 
      return filmData.title; 
    }); 
    const films = await Promise.all(filmsPromises); 
    return { 
      name: characterData.name, 
      films: films, 
    }; 
  } catch (error) { 
    return Promise.reject(new Error("smth went wrong")); 
  } 
} 
 
export default fetchCharacterWithMovies;