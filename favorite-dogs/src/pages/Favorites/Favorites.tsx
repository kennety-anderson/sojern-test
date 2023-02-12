import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ImageList from "../../components/ImageList";
import Image from "../../types/Image";
import { NotFoundMessage } from "./style";

const Favorites: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Image[]>([]);

  const getImages = (): void => {
    const listKeys: any = [];
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        listKeys.push(key);
      }

      const imagesByStorage: Image[] = listKeys.map((key) => ({
        id: key,
        url: localStorage.getItem(key),
      }));

      setImages(imagesByStorage);
    }

    setLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : images.length ? (
        <ImageList isFavorite={true} images={images} />
      ) : (
        <NotFoundMessage>Not saved images yet</NotFoundMessage>
      )}
    </>
  );
};

export default Favorites;
