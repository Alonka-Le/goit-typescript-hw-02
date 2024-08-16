import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";
import { Image, OpenModalProps } from "../types";

interface ImageGalleryProps {
  images: Image[];
  onClick: (props: OpenModalProps) => void;
}

export default function ImageGallery({ images, onClick }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {images.map(({ id, urls, alt_description, description, likes }) => (
        <li key={id} className={css.item}>
          <ImageCard
            image={{ id, urls, alt_description, description, likes }}
            openModal={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
