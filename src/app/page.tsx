import Header from './components/header';
import NewEventButton from './components/NewEventButton';
import SideBarMenu from './components/SideBarMenu';
import UserStats from './components/UserStats';

export default function Home() {
  return (
    <>
      <Header />
      <SideBarMenu />
      <NewEventButton />
      <UserStats />
    </>
  );
}
