'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  const router = useRouter();

  return (
    <motion.header
      className="flex items-center justify-between"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-3xl font-bold ">Fap - {title}</h1>
      <button
        className="hover:bg-gray-300 focus:bg-gray-400 rounded-full w- flex justify-center items-center p-1"
        onClick={() => router.push('/cursos')}
      >
        <IoIosArrowBack className="text-4xl" />
      </button>
    </motion.header>
  );
}
