import usePlatform, { Platform } from "../hooks/usePlatform";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <MenuRoot size="sm">
      <MenuTrigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform?.name || "Platforms"}
          <FaAngleDown></FaAngleDown>
        </Button>
      </MenuTrigger>
      <MenuContent
        className="platform-content"
        boxSize="200px"
        overflow="auto"
        position="absolute"
        marginTop="40px"
        borderRadius={5}
      >
        <MenuItem value="all-games" onClick={() => onSelectPlatform(null)}>
          All games
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
