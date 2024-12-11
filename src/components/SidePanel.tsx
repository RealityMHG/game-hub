import { mainColorAlpha } from "../main";
import { Box } from "@chakra-ui/react";
import { PiList } from "react-icons/pi";

interface Props {
  onPanelClick: (panel: boolean) => void;
  panelStatus: boolean;
}

const SidePanel = ({ onPanelClick, panelStatus }: Props) => {
  return (
    <Box
      className="side-panel"
      alignContent="center"
      marginLeft="auto"
      marginRight="40px"
      cursor="pointer"
      padding={0}
      onClick={() => onPanelClick(!panelStatus)}
      _hover={{ color: mainColorAlpha, scale: 1.2 }}
      transition="all 0.2s ease-in-out"
    >
      <PiList size={40}></PiList>
    </Box>
  );
};

export default SidePanel;
