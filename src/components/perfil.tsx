'use client';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { GiProgression } from 'react-icons/gi';
import { IoMdExit } from 'react-icons/io';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

export default function Perfil() {
  return (
    <>
      <Dropdown className="bg-[#1B4332] text-white">
        <DropdownTrigger>
          <User
            as="button"
            name=""
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            className=" w-16 h-16 rounded-full transition-transform transform hover:scale-110 "
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="solid">
          <DropdownItem
            key="profile"
            variant={undefined}
            className=" text-gray-100 cursor-default  "
          >
            <p className="font-bold">Bem vindo</p>
            <p className="font-bold">@softexpe</p>
          </DropdownItem>

          <DropdownItem
            startContent={<GiProgression className="text-large" />}
            key="analytics"
          >
            Progresso
          </DropdownItem>
          <DropdownItem
            startContent={<IoIosNotificationsOutline className="text-xl" />}
            key="notification"
          >
            Notificações
          </DropdownItem>
          <DropdownItem
            startContent={<IoSettingsOutline className="text-large" />}
            key="settings"
          >
            Configurações
          </DropdownItem>

          <DropdownItem
            startContent={<IoMdExit className="text-large" />}
            key="logout"
            color="danger"
            as={NextLink}
            href="/"
          >
            Sair
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
