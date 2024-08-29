import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onCloseClick: () => void;
  imageUrl: string;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onCloseClick, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseClick}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={imageUrl} className={s.modalImage} alt="Modal" />
      </div>
    </Modal>
  );
};

export default ImageModal;
