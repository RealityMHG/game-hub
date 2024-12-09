import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { MdGamepad } from "react-icons/md";
import { mainColor } from "../main";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      /*
      onKeyUp={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }} */
    >
      <InputGroup
        flex={1}
        startElement={<MdGamepad size={20}></MdGamepad>}
        marginX={4}
        width="97%"
      >
        <Input
          borderRadius={20}
          placeholder="Search Games!"
          _placeholder={{ color: mainColor }}
          variant="flushed"
          size="lg"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
