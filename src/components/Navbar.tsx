import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { mainColorAlpha } from "../main";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} marginX={5} marginY={2}>
      <Image
        src={logo}
        boxSize={"60px"}
        borderRadius={"full"}
        border="2px solid"
        borderColor={{ base: "black", _dark: "white" }}
        _hover={{ scale: 1.2, borderColor: mainColorAlpha }}
        transition="all 0.2s ease-in-out"
      ></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default Navbar;
