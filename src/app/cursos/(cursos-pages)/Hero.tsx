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
      className="bg-gradient-to-b from-green-800 via-green-600 to-green-800 text-white h-52 flex items-center justify-between px-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-5xl font-bold">Fap - {title}</h1>
      <button
        className="hover:bg-green-800 focus:bg-green-700 rounded-full w- flex justify-center items-center p-1"
        onClick={() => router.push('/cursos')}
      >
        <IoIosArrowBack className="text-4xl" />
      </button>
    </motion.header>
  );
}
