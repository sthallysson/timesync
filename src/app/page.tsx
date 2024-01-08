'use client';

import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdLockOutline, MdLockOpen } from 'react-icons/md';
import Lottie from 'react-lottie';

import * as calendarAnimation from '../../public/json/calendar.json';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type createUserFormData = z.infer<typeof createUserFormSchema>;

// Representação da estrutura de dados e suas limitações
const createUserFormSchema = z.object({
  email: z
    .string()
    .min(0, 'O email não pode estar vazio')
    .email('Formato de e-mail invalido')
    .toLowerCase(),
  password: z.string().min(6, 'A senha precisa de no minimo 6 caracteres'),
});

export default function Home() {
  const [output, setOutput] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calendarAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(output);
  }

  return (
    <main
      className="lg:w-screen h-screen bg-[url('../../public/bg.svg')]
      flex flex-col lg:flex-row items-center justify-center lg:justify-evenly text-lg
      "
    >
      <div className="max-[912px]:contents max-[1020px]:hidden">
        <Lottie options={defaultOptions} height="50%" width="65%" />
      </div>

      <form
        onSubmit={handleSubmit(createUser)}
        className="
          w-3/4 h-3/5
          md:w-1/2
          xl:w-4/12
          p-3 text-center flex flex-col justify-evenly
          "
      >
        <h1 className="text-4xl">Login</h1>
        <div className="p-8 flex flex-col justify-center">
          <Input
            className="xl:my-6 min-[280px]:mb-3"
            type="email"
            label="Email"
            isInvalid={errors.email}
            errorMessage={errors.email?.message}
            color={errors.email ? 'danger' : 'primary'}
            {...register('email')}
          />

          <Input
            className="xl:mb-6 min-[280px]:mb-3"
            type={isVisible ? 'text' : 'password'}
            label="Senha"
            isInvalid={errors.password}
            errorMessage={errors.password?.message}
            color={errors.password ? 'danger' : 'primary'}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <MdLockOpen /> : <MdLockOutline />}
              </button>
            }
            {...register('password')}
          />

          <Button type="submit" color="success" className="w-full">
            Entrar
          </Button>
        </div>
      </form>
    </main>
  );
}
