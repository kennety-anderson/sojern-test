import React, { useState } from "react";
import { Card, Img } from "./styles";
import Image from "../../types/Image";
import { BiStar, BiTrash } from "react-icons/bi";
interface Props {
  id: string;
  url: string;
  isFavorite;
}

const ImageCard: React.FC<Props> = ({ id, url, isFavorite }) => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);
  const [image] = useState<Image>({ id, url });

  const saveImage = () => image && localStorage.setItem(image.id, image.url);

  const removeImage = () => image && localStorage.removeItem(image.id);

  return (
    <Card className="imageCard">
      <Img key={id} src={url} alt="dog-img" />
      {!favorite && (
        <BiStar
          color={favorite ? "#FFD700" : undefined}
          cursor={"pointer"}
          opacity={0.9}
          onClick={() => {
            setFavorite(true);
            saveImage();
          }}
        />
      )}
      {favorite && (
        <BiTrash
          cursor={"pointer"}
          onClick={() => {
            setFavorite(false);
            removeImage();
          }}
        />
      )}
    </Card>
  );
};

export default ImageCard;
