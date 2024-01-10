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
import { CiLocationOn } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';

export default function NewEventButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <div className="flex-col flex gap-1">
                  <Input type="text" label="Título" />
                  <Input
                    type="datetime-local"
                    label="Data/Hora"
                    placeholder="Data/Hora"
                  />

                  <Input
                    endContent={<CiLocationOn className="text-xl" />}
                    type="text"
                    label="Localização"
                  />
                  <Textarea
                    label="Descrição"
                    placeholder="Escreva sua descrição"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button className="bg-green-500  text-white" onPress={onClose}>
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
