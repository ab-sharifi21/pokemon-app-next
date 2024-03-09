import { PokemonInfo } from '@/components';
import { getPokemonByName } from '@/helpers/getPokemonByName';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GiWeightScale } from 'react-icons/gi';
import { IoMdArrowBack } from 'react-icons/io';
import { MdOutlineHeight, MdOutlineMergeType } from 'react-icons/md';

interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemonByName(params.name);

    return {
      title: `#${id} - ${name}`,
      description: `${name} Page`,
    };
  } catch (error) {
    return {
      title: 'Pokemon Page',
      description: 'Pokemon page',
    };
  }
}

async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemonByName(params.name);
  const { id, name, abilities, height, weight, types } = pokemon;
  return (
    <section className="my-8 flex max-w-[25rem] flex-col items-center gap-4 px-2">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/pokemons"
          className="rounded-lg bg-btnColor px-2 py-1 text-xl duration-500 hover:scale-105"
        >
          <IoMdArrowBack />
        </Link>
        <span className="text-lg font-bold">{name}</span>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Image
          className="drop-shadow-mainDropShadow duration-700 hover:scale-110"
          src={pokemon.sprites.other?.dream_world.front_default ?? ''}
          width={200}
          height={180}
          alt={`${pokemon.name}'s image`}
        />
        <div className="flex w-full items-center justify-between">
          {abilities.map((ability) => {
            return (
              <span
                className="rounded-2xl bg-btnColor px-2 py-1"
                key={ability.ability.name}
              >
                {ability.ability.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-4 rounded-lg bg-secondaryBgColor px-4 py-8 shadow-mainBoxShadow">
        <PokemonInfo
          icon={<MdOutlineHeight className="h-12 w-4 text-btnColor" />}
          text="Height"
          value={`${height} m`}
        />
        <PokemonInfo
          icon={<GiWeightScale className="h-12 w-4 text-btnColor" />}
          text="Weight"
          value={`${weight} kg`}
        />
        <PokemonInfo
          icon={<MdOutlineMergeType className="h-12 w-4 text-btnColor" />}
          text="Type"
          value={`${types[0].type.name}`}
        />
      </div>
    </section>
  );
}

export default PokemonPage;
