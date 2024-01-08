'use client';

import Lottie from 'react-lottie';

import Form from '../components/Form';

import * as calendarAnimation from '../../public/json/calendar.json';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calendarAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <main
      className="lg:w-screen h-screen bg-[url('../../public/bg.svg')]
      flex flex-col lg:flex-row items-center justify-center lg:justify-evenly text-lg
      "
    >
      <div className="max-[912px]:contents max-[1020px]:hidden">
        <Lottie options={defaultOptions} height="50%" width="65%" />
      </div>

      <Form />
    </main>
  );
}
