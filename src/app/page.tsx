import Header from './components/header';
import UserStats from './components/UserStats';
import Botao from './components/botao';
import { MonthCalendar } from './components/MonthCalendar';

export default function Home() {
  return (
    <>
      <Header />
      <UserStats />
      <Botao />
      <MonthCalendar />
    </> 
  );
}
