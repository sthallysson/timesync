import Header from './components/header';
import NewEventButton from './components/NewEventButton';
import UserStats from './components/UserStats';
import Perfil from './components/perfil';

export default function Home() {
  return (
    <>
      <Header />
      <NewEventButton />
      <UserStats />
      <Perfil />
    </>
  );
}
