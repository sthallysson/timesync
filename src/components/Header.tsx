import Image from 'next/image';

import logo from '../../public/logo.png';
import Perfil from './perfil';

export default function Header() {
  return (
    <header className="flex bg-[#081C15] justify-between items-center py-2 px-10 pr-3 fixed top-0 w-full h-20 z-20">
      <Image src={logo} alt="logo" />
      <Perfil />
    </header>
  );
}
