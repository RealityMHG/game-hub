import { FaGem } from "react-icons/fa";
import { IoThumbsUp } from "react-icons/io5";
import { CiFaceMeh } from "react-icons/ci";
import { Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { mainColor } from "../main";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: IconType } = {
    5: FaGem,
    4: IoThumbsUp,
    3: CiFaceMeh,
  };

  return (
    <Text
      as={emojiMap[rating]}
      color={mainColor}
      boxSize={5}
      animation="pulse"
    ></Text>
  );
};

export default Emoji;
