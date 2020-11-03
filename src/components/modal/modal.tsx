import React from "react";
import {
  Modal as ModalComponent,
  ModalOverlay,
  Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/core";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode | null;
  title: string;
};

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => (
  <ModalComponent isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button variantColor="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </ModalComponent>
);

export { Modal };
