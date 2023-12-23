
import Header from './components/header';
import Menu from './components/Menu';
import Botao from './components/botao';
import { MonthCalendar } from './components/MonthCalendar';
    
export default function Home() {
  return ( 
    <>
      <Menu />
      <Header />
      <Botao />
      <MonthCalendar />
   </> 
  );
}
