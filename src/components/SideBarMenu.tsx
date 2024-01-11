'use client';

import { Button, ButtonGroup } from '@nextui-org/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { pagesRoutes } from '@/utils/pagesRoutes';

export default function SideBarMenu() {
  const pathname = usePathname();

  return (
    <aside className=" w-52 h-screen bg-[#1B4332] fixed left-0 top-20">
      <ButtonGroup className="grid grid-cols-1 pt-5" radius="none" size="md">
        {pagesRoutes.map((route) => (
          <Button
            startContent={route.icon}
            className={`${
              pathname === route.path ? 'text-yellow-300' : 'text-white'
            } bg-[#1B4332] justify-start`}
            as={NextLink}
            href={route.path}
            key={route.path}
          >
            {route.name}
          </Button>
        ))}
      </ButtonGroup>
    </aside>
  );
}
