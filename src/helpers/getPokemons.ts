import { PokemonsInterface } from '@/interfaces/pokemonsInterface';

export const getPokemons = async (
  limit: number,
): Promise<PokemonsInterface> => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
  );
  const body = await resp.json();
  return body.results;
};
