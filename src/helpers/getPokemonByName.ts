import { Pok } from '@/interfaces/simplePokemonInterface';
import { notFound } from 'next/navigation';

export const getPokemonByName = async (name: string): Promise<Pok> => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await resp.json();
    return pokemon;
  } catch (error) {
    notFound();
  }
};
