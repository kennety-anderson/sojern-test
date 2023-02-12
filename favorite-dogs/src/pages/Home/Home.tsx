import React, { useState, useEffect } from "react";
import { Container, Button } from "./style";
import { getDogImages } from "../../resources/dogs";
import ImageList from "../../components/ImageList/index";
import Loading from "../../components/Loading/index";
import Images from "../../types/Image";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Images[]>([]);

  const getImagesJpg = async (): Promise<any> => {
    const { data } = await getDogImages();
    const ext: string = data.url.substr(-3);
    if (ext === "jpg") {
      return data;
    } else {
      return await getImagesJpg();
    }
  };

  const getListImages = async (): Promise<void> => {
    let imagesList: Images[] = [];
    for (let index = 1; index <= 6; index++) {
      const data = await getImagesJpg();

      imagesList.push({ id: String(Math.random()), url: data.url });
    }

    setImages(imagesList);
    setLoading(false);
  };

  useEffect(() => {
    getListImages();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <ImageList isFavorite={false} images={images} />
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </Container>
      )}
    </>
  );
};

export default Home;
