import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

ModalBox.propTypes = {
   isOpenModal: PropTypes.bool,
   modalTitle: PropTypes.string,
   modalContent: PropTypes.string,
   buttonActionContent: PropTypes.string,
   onActionClick: PropTypes.func,
   onSetCloseModal: PropTypes.func,
};

function ModalBox(props) {
   const { isOpenModal, modalTitle, modalContent, buttonActionContent, onActionClick, onSetCloseModal } = props;

   const handleActionClick = () => {
      if (onActionClick) onActionClick();
   };

   const handleCloseModal = () => {
      if (onSetCloseModal) onSetCloseModal();
   };

   return (
      <Modal isOpen={isOpenModal}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {modalContent}
            </ModalBody>

            <ModalFooter>
               <Button colorScheme='yellow' mr={3} onClick={handleCloseModal}>
                  CANCEL
               </Button>
               <Button colorScheme={'whatsapp'} onClick={handleActionClick} >{buttonActionContent}</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
}

export default ModalBox;