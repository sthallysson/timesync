'use client';

import { Avatar, Progress } from '@nextui-org/react';

export default function UserStats() {
  return (
    <aside className="w-80 m-2 border-2 border-slate-600">
      <div>
        <h2>Meu perfil</h2>
        <div className=" m-2">
          <div className=" flex flex-col justify-evenly items-center mt-6">
            <Avatar
              name="G"
              className="w-20 h-20 text-large text-white mb-3"
              color="success"
            ></Avatar>
            <Progress
              className=" mb-2"
              label="sucesso das tarefas"
              color="success"
              aria-label="Loading..."
              value={60}
            />
            <Progress
              label="nota media das tarefas"
              color="success"
              aria-label="Loading..."
              value={80}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
