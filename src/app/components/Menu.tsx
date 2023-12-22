/* eslint-disable prettier/prettier */

import { Avatar, Checkbox, Progress} from '@nextui-org/react';

export default function Menu() {

  return (
  <aside className=' w-fit p-1 border-3 border-slate-800'>
    <div>
      <h2>Opções:</h2>
      <ul className=' flex flex-col justify-between px-1'>
        <li className=' my-2'>
          <Checkbox size='md' color='success' radius='none'/> 
          <span className=' px-1'>Encontros presenciais/remotos</span>
        </li>

        <li className=' my-2'>
          <Checkbox size='md' color='success' radius='none'/>
          <span className=' px-1'>Eventos da área de trabalho</span>
        </li>

        <li className=' my-2'>
          <Checkbox size='md' color='success' radius='none'/> 
          <span className=' px-1'>Outros calendários</span>
        </li>
      </ul>

      <h2>Meu perfil</h2>
      <div className=' m-2'>
        <div className=' flex flex-col justify-evenly items-center mt-6'>
          <Avatar name='G' className='w-20 h-20 text-large text-white mb-3' color='success'></Avatar>
          <Progress className=' mb-2' label='sucesso das tarefas'color='success' aria-label="Loading..." value={60}/>
          <Progress label='nota media das tarefas' color='success' aria-label="Loading..." value={80}/>
        </div>
      </div>
    </div>
  </aside>
  );
}
