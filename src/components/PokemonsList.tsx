import { getPokemons } from '@/helpers/getPokemons';
import { Result } from '@/interfaces/pokemonsInterface';
import { PokemonItem } from '.';

export async function PokemonsList() {
  const pokemonsList: Result[] = await getPokemons(150);
  return (
    <section className="flex flex-wrap items-center justify-center gap-4">
      {pokemonsList.map((pokemon) => {
        return <PokemonItem key={pokemon.name} {...pokemon} />;
      })}
    </section>
  );
}
