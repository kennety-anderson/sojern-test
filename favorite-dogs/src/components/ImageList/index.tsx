import React from "react";
import { List, Item } from "./styles";
import ImageCard from "../ImageCard/index";
import Image from "../../types/Image";

const ImageList: React.FC<{ images: Image[]; isFavorite: boolean }> = ({
  images,
  isFavorite,
}) => {
  return (
    <List id="imageList">
      {images.map((image) => (
        <Item className="imageItem" key={image.id}>
          <ImageCard
            key={image.id}
            isFavorite={isFavorite}
            id={image.id}
            url={image.url}
          />
        </Item>
      ))}
    </List>
  );
};

export default ImageList;
