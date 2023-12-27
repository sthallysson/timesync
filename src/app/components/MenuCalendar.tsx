/* eslint-disable prettier/prettier */
'use client'

import { Button, ButtonGroup} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {BsListCheck} from 'react-icons/bs';
import {FaRegCalendarCheck} from 'react-icons/fa'
import {MdOutlineMenuBook} from 'react-icons/md';
import {PiCalendarLight} from 'react-icons/pi';

export default function MenuCalendar(){
    // O Hook 'useRouter' é usado para criar links entre as rotas da aplicação em Next.js
    const route = useRouter();

    return (
        <aside className=' w-52 h-screen bg-lime-900'>
            {/*Como orientar verticalmente */}
                <ButtonGroup className=" grid grid-cols-1 pt-5" radius="none" size="md">
                    <Button 
                    startContent={<MdOutlineMenuBook/>} 
                    className="text-white bg-lime-900 justify-start"
                    onClick={()=>{route.push('/cursos')}}
                    >
                        Meus cursos
                    </Button>

                    <Button 
                    startContent={<PiCalendarLight/>} 
                    className="text-white bg-lime-900 justify-start"
                    onClick={()=>{route.push('/calendario')}}
                    >
                        Calendario
                    </Button>

                    <Button 
                    startContent={<BsListCheck/>} 
                    className="text-white bg-lime-900 justify-start"
                    onClick={()=>{route.push('/agenda')}}
                    >
                        Agenda
                    </Button>

                    <Button 
                    startContent={<FaRegCalendarCheck/>} 
                    className="text-white bg-lime-900 justify-start"
                    onClick={()=>{route.push('/eventos')}}
                    >
                        Eventos
                    </Button>
                </ButtonGroup>
        </aside>
    )
}