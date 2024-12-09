import { Card, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms.map((platform) => platform.platform);

  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <Card.Description>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList platforms={platforms}></PlatformIconList>
            <CriticScore score={game?.metacritic || 0}></CriticScore>
          </HStack>
        </Card.Description>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <Card.Footer justifyContent="flex-end" padding={0} paddingTop={5}>
          <Emoji rating={game.rating_top}></Emoji>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
