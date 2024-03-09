import Image from 'next/image';
import boy from '../../public/pokemon-boy.png';

export default function Home() {
  return (
    <main className="my-8 flex flex-col items-center justify-center gap-6 md:flex-row">
      <div className="max-w-2xl">
        <h1 className="my-4 text-xl font-bold">Pokemons Page</h1>
        <p className="mb-4 max-w-xl text-sm">
          Search your favorite pokemons using the serach box above or see a list
          of most popular pokemons click on <i>Pokemos</i> link above.
        </p>
      </div>
      <div className="w-ful flex items-center justify-center">
        <Image src={boy} width={250} height={300} alt="Pokemon boy photo" />
      </div>
    </main>
  );
}
