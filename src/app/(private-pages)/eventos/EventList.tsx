'use client';

import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { GoPlus } from 'react-icons/go';

import { eventsList } from '@/utils/eventsList';

export default function EventList() {
  return (
    <div className="gap-3 p-4 grid grid-cols-[repeat(auto-fill,min(320px))]">
      {eventsList.map((item, index) => (
        <Card shadow="sm" key={index} radius="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              as={NextImage}
              shadow="sm"
              radius="none"
              width={320}
              height={208}
              alt={item.title}
              className="w-full object-cover h-52"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small gap-2">
            <header className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold text-left">{item.title}</h2>
              <p className="text-default-500">{item.date}</p>
            </header>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium vero molestias alias ipsum voluptatibus tempora quas
              inventore quaerat aspernatur repellat nisi, dolorem molestiae quos
              autem itaque nam quasi at doloremque.
            </p>

            <Button
              radius="sm"
              className="self-end bg-[#1B4332] text-white text-1xl "
              startContent={<GoPlus className="text-lg" />}
            >
              Adicionar a agenda
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
