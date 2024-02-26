import { Result } from '@/interfaces/pokemonsInterface';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export function PokemonItem({ name, url }: Result) {
  const id = url.split('/').at(-2);
  return (
    <article className="flex flex-col items-center justify-center gap-2 rounded-md bg-secondaryBgColor p-4 shadow-mainBoxShadow">
      <Image
        className="hover:drop-shadow-[5px 5px 10px rgba(244, 255, 255, 0.5)] h-[120px] w-[140px] drop-shadow-mainDropShadow duration-1000 hover:scale-110"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={140}
        height={120}
        alt="pokemon image"
      />
      <span className="text-lg font-semibold capitalize">{name}</span>
      <Link
        href={`/${name}`}
        className=" flex items-center gap-2 rounded-full bg-btnColor px-3 py-1 text-sm hover:scale-110"
      >
        <span>More</span>
        <FaArrowRight />
      </Link>
    </article>
  );
}
