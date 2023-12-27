'use client'; // Colocar este use client no component Botao

import Header from './components/header';
import UserStats from './components/UserStats';
import Botao from './components/botao';

export default function Home() {
  return (
    <>
      <Header />
      <Botao />
      <UserStats />
    </> 
  );
}
