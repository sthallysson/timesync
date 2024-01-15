import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';

import CalendarContext from '@/contexts/CalendarContext';

export default function EventLabels() {
  const { selectedLabel, setSelectedLabel } = useContext(CalendarContext);
  return (
    <section className="flex ml-1 gap-1">
      <button
        type="button"
        onClick={() => setSelectedLabel('blue')}
        className={`bg-blue-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'blue' && <FaCheck />}
      </button>
      <button
        type="button"
        onClick={() => setSelectedLabel('green')}
        className={`bg-green-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'green' && <FaCheck />}
      </button>
      <button
        type="button"
        onClick={() => setSelectedLabel('yellow')}
        className={`bg-yellow-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'yellow' && <FaCheck />}
      </button>
      <button
        type="button"
        onClick={() => setSelectedLabel('gray')}
        className={`bg-gray-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'gray' && <FaCheck />}
      </button>
      <button
        type="button"
        onClick={() => setSelectedLabel('red')}
        className={`bg-red-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'red' && <FaCheck />}
      </button>
      <button
        type="button"
        onClick={() => setSelectedLabel('purple')}
        className={`bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center text-gray-300 cursor-pointer hover:scale-110 transition-all`}
      >
        {selectedLabel === 'purple' && <FaCheck />}
      </button>
    </section>
  );
}
