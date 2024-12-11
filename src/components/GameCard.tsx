import { Card, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Platform } from "../hooks/usePlatform";
import { useState } from "react";
import { mainColorAlpha } from "../main";
import ImageSlider from "./ImageSlider";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [focused, setFocused] = useState(false);
  let platforms: Platform[] = [];

  if (game.parent_platforms) {
    platforms = game.parent_platforms.map((platform) => platform.platform);
  }

  return (
    <Card.Root
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      _hover={{
        border: "2px solid " + mainColorAlpha,
      }}
      transition="border 100ms ease-in-out"
    >
      {focused ? (
        <ImageSlider images={game.short_screenshots}></ImageSlider>
      ) : (
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
      )}

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
