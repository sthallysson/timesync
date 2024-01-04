import Header from './components/header';
import NewEventButton from './components/NewEventButton';
import Perfil from './components/perfil';
import SideBarMenu from './components/SideBarMenu';
import UserStats from './components/UserStats';

export default function Home() {
  return (
    <>
      <SideBarMenu />
      <Header />
      <NewEventButton />
      <UserStats />
      <Perfil />
    </>
  );
}
