import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';
import React, { FormEvent, useContext, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';

import EventLabels from './EventLabels';

import CalendarContext from '@/contexts/CalendarContext';
import { Dayjs } from 'dayjs';

interface EventModalProps {
  day: Dayjs;
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function EventModal({
  day,
  isOpen,
  onOpenChange,
}: EventModalProps) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const { dispatchCalEvent, selectedLabel } = useContext(CalendarContext);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const calendarEvent = {
      title,
      location,
      description,
      day: day.valueOf(),
      label: selectedLabel,
      id: Date.now(),
    };

    dispatchCalEvent({ type: 'add', payload: calendarEvent });
    setTitle('');
    setLocation('');
    setDescription('');
  }

  return (
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

                <EventLabels />

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
  );
}
