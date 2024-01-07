import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from '@nextui-org/react';
import React, { FormEvent, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';

import EventLabels from './EventLabels';

import dayjs, { Dayjs } from 'dayjs';

interface DayProps {
  day: Dayjs;
  style?: string;
}

type Events = {
  title: string;
  location: string;
  description: string;
  day: Dayjs;
  label: string;
};

export default function Day({ day, style }: DayProps) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('blue');
  const [savedEvents, setSavedEvents] = useState<Events[]>([]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-gradient-to-t from-green-700 via-green-600 to-green-700 text-white rounded-full w-7 h-7'
      : '';
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSavedEvents([
      ...savedEvents,
      { title, location, description, day, label: selectedLabel },
    ]);

    setTitle('');
    setLocation('');
    setDescription('');
  }

  return (
    <>
      <div
        onClick={onOpen}
        className={`border sm:h-24 min-h-16 sm:px-4 sm:py-2 text-xs px-2 py-1 bg-[#F5F5F5] border-gray-300 flex items-center rounded-lg ${style} flex-col`}
      >
        <p
          className={`text-sm p-1 text-center font-semibold ${getCurrentDayClass()}`}
        >
          {day.format('DD')}
        </p>
        <section className="flex flex-col gap-[1px] w-full overflow-y-scroll no-scrollbar ">
          {savedEvents.map((ev, i) => {
            return (
              ev.day === day && (
                <div
                  key={i}
                  className={`bg-${ev.label}-500 rounded-md px-2 p-1 text-white cursor-pointer`}
                >
                  {ev.title}
                </div>
              )
            );
          })}
        </section>
      </div>

      <Modal isOpen={isOpen} backdrop="transparent" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Adicionar Evento
              </ModalHeader>
              <ModalBody>
                <form
                  id="event-form"
                  className="flex-col flex gap-4"
                  onSubmit={onSubmit}
                >
                  <Input
                    type="text"
                    label="Título"
                    variant="faded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <EventLabels
                    selectedLabel={selectedLabel}
                    setSelectedLabel={setSelectedLabel}
                  />

                  <p className="flex items-center gap-2 ml-2 ">
                    <FaRegClock />
                    <span className="capitalize ">
                      {day.locale('pt-br').format(`dddd, DD MMMM`)}
                    </span>
                  </p>
                  <Input
                    endContent={<CiLocationOn className="text-xl" />}
                    type="text"
                    label="Localização"
                    variant="faded"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <Textarea
                    label="Descrição"
                    placeholder="Escreva sua descrição"
                    variant="faded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  radius="sm"
                  variant="light"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  radius="sm"
                  className="text-white"
                  type="submit"
                  form="event-form"
                  onPress={onClose}
                >
                  Salvar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
