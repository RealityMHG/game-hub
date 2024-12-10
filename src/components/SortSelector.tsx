import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaSort } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrder: SortOrder;
}

export interface SortOrder {
  value: string;
  label: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Popularity" },
    { value: "-metacritic", label: "Rating" },
  ];

  return (
    <MenuRoot size="sm">
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <FaSort></FaSort> Sort By: {selectedSortOrder?.label || "Relevance"}
        </Button>
      </MenuTrigger>
      <MenuContent
        boxSize="160px"
        position="absolute"
        marginTop="4px"
        borderRadius={5}
      >
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
