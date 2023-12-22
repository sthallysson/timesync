/* eslint-disable prettier/prettier */

import { Button, ButtonGroup} from "@nextui-org/react";
import {BsListCheck} from 'react-icons/bs';
import {FaRegCalendarCheck} from 'react-icons/fa'
import {MdOutlineMenuBook} from 'react-icons/md';
import {PiCalendarLight} from 'react-icons/pi';

export default function MenuCalendar(){
    return (
        <aside className=' w-52'>
            {/*Como orientar verticalmente */}
            <div className='h-screen bg-lime-900'>
                <ButtonGroup className=" grid grid-cols-1 pt-5" radius="none" size="md">
                    <Button startContent={<MdOutlineMenuBook/>} className="text-white bg-lime-900 justify-start">
                        Meus cursos
                    </Button>
                    <Button startContent={<PiCalendarLight/>} className="text-white bg-lime-900 justify-start">
                        Calendario
                    </Button>
                    <Button startContent={<BsListCheck/>} className="text-white bg-lime-900 justify-start">
                        Agenda
                    </Button>
                    <Button startContent={<FaRegCalendarCheck/>} className="text-white bg-lime-900 justify-start">
                        Eventos
                    </Button>
                </ButtonGroup>
            </div>
        </aside>
    )
}