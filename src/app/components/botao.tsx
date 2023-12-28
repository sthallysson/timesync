import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export default function Botao() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="bg-green-500 text-white" onPress={onOpen}>
        Calendario
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Calendario SOFTEX
              </ModalHeader>
              <ModalBody>
                <p className="text-gray-700">Bem vindo ao nosso calendario</p>
                <p className="text-gray-700">Aqui vc pode organizar</p>
                <p className="text-gray-700">Texto aqui</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button className="bg-green-500  text-white" onPress={onClose}>
                  Ativar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
