import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { NavBar } from '.';

export function Header() {
  return (
    <header className="flex flex-col items-center gap-3">
      <Image src={Logo} width={270} height={99} alt="Pokemon's logo" />
      <form>
        <input
          className="w-[20rem] rounded-3xl bg-secondaryBgColor px-4 py-3 caret-btnColor shadow-mainBoxShadow outline-none placeholder:text-btnColor"
          placeholder="Search pokemon..."
          type="text"
        />
      </form>
      <NavBar />
    </header>
  );
}
