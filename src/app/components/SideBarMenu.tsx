/* eslint-disable prettier/prettier */
'use client'
// Use o Link nos componentes Button
import { Button, ButtonGroup, Link} from "@nextui-org/react";
import {BsListCheck} from 'react-icons/bs';
import {FaRegCalendarCheck} from 'react-icons/fa'
import {MdOutlineMenuBook} from 'react-icons/md';
import {PiCalendarLight} from 'react-icons/pi';

export default function SideBarMenu(){

    return (
        <aside className=' w-52 h-screen bg-lime-900'>
            {/*Como orientar verticalmente */}
                <ButtonGroup className=" grid grid-cols-1 pt-5" radius="none" size="md">
                    <Button 
                    startContent={<MdOutlineMenuBook/>} 
                    className="text-white bg-lime-900 justify-start"
                    as={Link}
                    href="/cursos"
                    >
                        Meus cursos
                    </Button>

                    <Button 
                    startContent={<PiCalendarLight/>} 
                    className="text-white bg-lime-900 justify-start"
                    as={Link}
                    href="/calendario"
                    >
                        Calendario
                    </Button>

                    <Button 
                    startContent={<BsListCheck/>} 
                    className="text-white bg-lime-900 justify-start"
                    as={Link}
                    href="/agenda"
                    >
                        Agenda
                    </Button>

                    <Button 
                    startContent={<FaRegCalendarCheck/>} 
                    className="text-white bg-lime-900 justify-start"
                    as={Link}
                    href="/eventos"
                    >
                        Eventos
                    </Button>
                </ButtonGroup>
        </aside>
    )
}