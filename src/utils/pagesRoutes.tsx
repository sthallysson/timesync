import { BsListCheck } from 'react-icons/bs';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { PiCalendarLight } from 'react-icons/pi';

export const pagesRoutes = [
  {
    name: 'Meus cursos',
    path: '/cursos',
    icon: <MdOutlineMenuBook />,
  },
  {
    name: 'Calendario',
    path: '/calendario',
    icon: <PiCalendarLight />,
  },
  {
    name: 'Agenda',
    path: '/agenda',
    icon: <BsListCheck />,
  },
  {
    name: 'Eventos',
    path: '/eventos',
    icon: <FaRegCalendarCheck />,
  },
];
