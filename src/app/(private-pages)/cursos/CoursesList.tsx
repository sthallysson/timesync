'use client';

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { courses } from '@/utils/courses';
import { motion } from 'framer-motion';

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
        className="gap-3 p-4 grid grid-cols-[repeat(auto-fill,min(320px))] "
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
            as={NextLink}
            href={`/cursos/${item.title
              .toLocaleLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <CardBody className="overflow-visible p-0 ">
              <Image
                as={NextImage}
                shadow="none"
                radius="none"
                width={320}
                height={208}
                alt={item.title}
                className="w-full object-contain max-h-[200px] "
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between text-white sm:text-small bg-[#1B4332]">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </>
  );
}
