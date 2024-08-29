import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  gallery: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    slug: string;
  }[];
  onClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, onClick }) => {
  return (
    <ul className={s.list}>
      {gallery.map((item) => (
        <ImageCard key={item.id} onClick={onClick} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
