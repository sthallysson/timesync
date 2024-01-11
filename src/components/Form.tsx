import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdLockOutline, MdLockOpen } from 'react-icons/md';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type createUserFormData = z.infer<typeof createUserFormSchema>;

const createUserFormSchema = z.object({
  email: z
    .string()
    .min(0, 'O email não pode estar vazio')
    .email('Formato de e-mail invalido')
    .toLowerCase(),
  password: z.string().min(6, 'A senha precisa de no minimo 6 caracteres'),
});

export default function Form() {
  const [output, setOutput] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function createUser(data: { email: string; password: string }) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(output);
  }

  return (
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
          isInvalid={errors.email ? true : false}
          errorMessage={errors.email?.message}
          color={errors.email ? 'danger' : 'primary'}
          {...register('email')}
        />

        <Input
          className="xl:mb-6 min-[280px]:mb-3"
          type={isVisible ? 'text' : 'password'}
          label="Senha"
          isInvalid={errors.password ? true : false}
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
  );
}
