'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { Input, Textarea } from '@nextui-org/react';
import { FormEvent, useContext, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';

import EventLabels from '@/app/(private-pages)/calendario/MonthCalendar/EventLabels';
import CalendarContext from '@/contexts/CalendarContext';
import dayjs from 'dayjs';

export default function NewEventButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const { dispatchCalEvent, selectedLabel } = useContext(CalendarContext);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const calendarEvent = {
      title,
      location,
      description,
      day: dayjs(date).valueOf(),
      label: selectedLabel,
      id: Date.now(),
    };

    dispatchCalEvent({ type: 'add', payload: calendarEvent });

    setTitle('');
    setLocation('');
    setDescription('');
    setDate('');
  }

  return (
    <>
      <Button
        radius="sm"
        startContent={<GoPlus className="text-2xl" />}
        className="bg-[#1B4332] text-white text-1xl "
        onPress={onOpen}
      >
        Novo evento
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo Evento
              </ModalHeader>
              <ModalBody>
                <form
                  id="event-form"
                  onSubmit={onSubmit}
                  className="flex-col flex gap-4"
                >
                  <Input
                    type="text"
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <EventLabels />

                  <Input
                    type="date"
                    label="Data"
                    placeholder="Data"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <Input
                    endContent={<CiLocationOn className="text-xl" />}
                    type="text"
                    label="Localização"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Textarea
                    label="Descrição"
                    placeholder="Escreva sua descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  color="success"
                  className="text-white"
                  radius="sm"
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
