import getCroppedImageUrl from "../services/image-url";
import { ScreenShot } from "../hooks/useGames";
import { Button, Image } from "@chakra-ui/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";

interface Props {
  images: ScreenShot[];
}

const ImageSlider = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = () => {
    setImageIndex((index) => (index == images.length - 1 ? 0 : index + 1));
  };

  const showPreviousImage = () => {
    setImageIndex((index) => (index == 0 ? images.length - 1 : index - 1));
  };

  return (
    <>
      <Button className="image-btn" onClick={showNextImage} style={{ left: 0 }}>
        <MdNavigateBefore></MdNavigateBefore>
      </Button>
      <Image src={getCroppedImageUrl(images[imageIndex].image)}></Image>
      <Button
        className="image-btn"
        onClick={showPreviousImage}
        style={{ right: 0 }}
      >
        <MdNavigateNext></MdNavigateNext>
      </Button>
    </>
  );
};

export default ImageSlider;
