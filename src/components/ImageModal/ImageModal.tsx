import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import React from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  url: string;
  alt_description: string;
  likes: number;
  description: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  url,
  alt_description,
  likes,
  description,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.container}
    >
      <div className={css.content}>
        <button onClick={closeModal} className={css.btn}>
          <IoIosCloseCircle className={css.svg} />
        </button>
        <img src={url} alt={alt_description} className={css.img} />
        <div className={css.overlay}>
          <p className={css.text}>{description}</p>
          <p className={css.text}> Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
