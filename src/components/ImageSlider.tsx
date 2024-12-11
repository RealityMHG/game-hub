import getCroppedImageUrl from "../services/image-url";
import { ScreenShot } from "../hooks/useGames";
import { Box, Button, Image } from "@chakra-ui/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";

interface Props {
  images: ScreenShot[];
}

//Fix the bug
const ImageSlider = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = () => {
    setImageIndex((index) => (index == 0 ? images.length - 1 : index - 1));
  };

  const showPreviousImage = () => {
    setImageIndex((index) => (index == images.length - 1 ? 0 : index + 1));
  };

  return (
    <>
      <Box overflow="hidden" width="100%" height="100%" display="flex">
        {images.map((url) => (
          <Image
            key={url.id}
            src={getCroppedImageUrl(url.image)}
            style={{ translate: `${-100 * imageIndex}%` }}
            transition="translate 0.3s ease-in-out"
          ></Image>
        ))}
      </Box>
      <Button className="image-btn" onClick={showNextImage} style={{ left: 0 }}>
        <MdNavigateBefore></MdNavigateBefore>
      </Button>
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
