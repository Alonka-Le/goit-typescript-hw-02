import css from "./ImageCard.module.css";
import React, { FC } from "react";
import { Image, OpenModalProps } from "../types";

interface ImageCardProps {
  image: Image;
  openModal: (props: OpenModalProps) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const {
    urls: { small, regular },
    alt_description,
    description,
    likes,
  } = image;

  return (
    <div className={css.container}>
      <img
        src={small}
        alt={alt_description}
        onClick={() =>
          openModal({ regular, alt_description, likes, description })
        }
        className={css.img}
      />
    </div>
  );
};

export default ImageCard;
