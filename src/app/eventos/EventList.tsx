'use client';

import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { GoPlus } from 'react-icons/go';

export default function EventList() {
  const list = [
    {
      title: 'Retorno as atividades presencias',
      img: 'https://media.discordapp.net/attachments/1133474946560041173/1187470391162175659/WhatsApp_Image_2023-12-21_at_15.48.27.jpeg?ex=65a03b7b&is=658dc67b&hm=5983cd84b27bf6064cca5825691e0e57420f48dd209ec71f52e29c7216309ca9&=&format=webp&width=447&height=632',
      date: '08/01/2023',
    },
    {
      title: 'Webinar GitHub',
      img: 'https://cdn.discordapp.com/attachments/1003202953647231007/1181992783536463924/git.jpeg?ex=65a7fd8f&is=6595888f&hm=45c4d610160a819fa7c4f3f359a01b30eb52e3c3bd2d1448de48ec357fceb368&',
      date: '06/12/2023',
    },
    {
      title: 'Webinar Metodologias Ágeis',
      img: 'https://media.discordapp.net/attachments/1003202953647231007/1183833395986444459/banner.jpeg?ex=65a57544&is=65930044&hm=62808b55176ce4760ba74cafdabf5a9ababeac4dee05119be47cff0d37a00542&=&format=webp&width=1125&height=632',
      date: '06/02/2023',
    },
    {
      title: 'Inicio do Curso de FrontEnd',
      img: 'https://i.pinimg.com/564x/bc/81/cf/bc81cfb9df56f9011f437ac32b0e71c8.jpg',
      date: '06/08/2023',
    },
    {
      title: 'Bem Vindos a Softex',
      img: 'https://i.pinimg.com/564x/68/9c/a3/689ca3b9703d9d9a782267687fae3899.jpg',
      date: '06/07/2023',
    },
  ];

  return (
    <div className="gap-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 p-4 sm:grid-cols-2">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log('item pressed')}
          radius="sm"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-52"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small gap-2">
            <header className="flex justify-between w-full">
              <h2 className="text-lg font-semibold">{item.title}</h2>
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
              className="self-end bg-green-500 text-white text-1xl "
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
