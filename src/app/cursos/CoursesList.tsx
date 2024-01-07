'use client';

import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react';

import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Desenvolvedor Back end',
    img: 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-back-end_114360-22210.jpg?size=626&ext=jpg&ga=GA1.1.884335197.1703443415&semt=ais',
  },
  {
    title: 'Desenvolvedor Front end',
    img: 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-programacao_114360-1351.jpg?size=626&ext=jpg&ga=GA1.1.884335197.1703443415&semt=ais',
  },
];

export default function CoursesList() {
  return (
    <>
      <motion.h1
        className="text-2xl font-bold mb-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Meus cursos
      </motion.h1>
      <motion.div
        className="gap-2 grid grid-cols-2 sm:grid-cols-4  "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {courses.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log('item pressed')}
            as={Link}
            href={`/cursos/${item.title
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <CardBody className="overflow-visible p-0 ">
              <Image
                shadow="none"
                radius="none"
                width="100%"
                alt={item.title}
                className="w-full object-contain max-h-[200px] "
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between text-white sm:text-small bg-gradient-to-b from-green-800 via-green-600 to-green-800">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </>
  );
}
