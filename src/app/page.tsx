'use client'; // Colocar este use client no component Botao

import Botao from './components/botao';
import Header from './components/header';
import Menu from './components/Menu';

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Botao />
    </>
  );
}
