/* eslint-disable prettier/prettier */
'use client'

import { Input, Button } from "@nextui-org/react";
import {useState} from 'react';
import { MdLockOutline, MdLockOpen } from "react-icons/md";

export default function Login(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{setIsVisible(!isVisible);};

    return (
        <main
        className=" flex items-center justify-center w-screen h-screen text-lg bg-green-600"
        >
            <div 
            className="w-2/6 h-3/5 p-3 text-center flex flex-col justify-evenly border-3 border-black
            rounded-md bg-white"
            >
                <h2 className="mb-14 underline">Tela Login</h2>
                <div className="">
                    <Input
                    className="my-5"
                    type='email' 
                    label='Email' 
                    />

                    <Input
                    className="my-5"
                    type= {isVisible? 'text':'password'} 
                    label='Senha'
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (<MdLockOpen />) : (<MdLockOutline />)}
                        </button>
                    }/>

                    <Button>Entrar</Button>
                </div>
            </div>
        </main>
    );
}