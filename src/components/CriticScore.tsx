import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 55 ? "yellow" : "";

  return (
    <Badge colorPalette={color} fontSize={12} paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
