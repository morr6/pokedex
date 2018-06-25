const PokemonList = () => {

  const fetchList = (limit, offset) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ limit }&offset=${ offset }`)
    .then(res => res.json())
  };

  return {
    fetchList
  }
};

export const pokemonList = PokemonList();

const GetPokemon = () => {

    const fetchPokemon = ( name ) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${ name }`)
    .then(res => res.json())
    }

    return {
        fetchPokemon
    }
}

export const PokemonApi = GetPokemon();