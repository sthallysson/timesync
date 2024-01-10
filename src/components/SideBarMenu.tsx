import { Button, ButtonGroup } from '@nextui-org/react';
import NextLink from 'next/link';

import { pagesRoutes } from '@/utils/pagesRoutes';

export default function SideBarMenu() {
  return (
    <aside className=" w-52 h-screen bg-[#1B4332] fixed left-0 top-20">
      <ButtonGroup className="grid grid-cols-1 pt-5" radius="none" size="md">
        {pagesRoutes.map((route) => (
          <Button
            startContent={route.icon}
            className="text-white bg-[#1B4332] justify-start"
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
