'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4">
      <Link
        className={` ${pathname === '/' ? 'bg-btnColor' : ''} flex items-center gap-2 rounded-lg px-3 py-1 font-semibold hover:bg-btnColor`}
        href="/"
      >
        <FaHome />
        <span>Home</span>
      </Link>
      <Link
        className={` ${pathname === '/pokemons' ? 'bg-btnColor' : ''} flex items-center gap-2 rounded-lg px-3 py-1 font-semibold hover:bg-btnColor`}
        href="/pokemons"
      >
        <MdOutlineCatchingPokemon />
        <span>Pokemos</span>
      </Link>
    </nav>
  );
}
