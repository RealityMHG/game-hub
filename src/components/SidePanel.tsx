import { Box } from "@chakra-ui/react";
import { PiList } from "react-icons/pi";

interface Props {
  onPanelClick: (panel: boolean) => void;
  panelStatus: boolean;
}

const SidePanel = ({ onPanelClick, panelStatus }: Props) => {
  return (
    <Box
      alignContent="center"
      marginLeft="auto"
      marginRight="40px"
      cursor="pointer"
      padding={0}
      onClick={() => onPanelClick(!panelStatus)}
    >
      <PiList size={40}></PiList>
    </Box>
  );
};

export default SidePanel;
