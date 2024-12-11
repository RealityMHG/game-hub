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
  gameSelected: Game | null;
  onSelectedGame: (game: Game | null) => void;
}

const GameCard = ({ game, gameSelected, onSelectedGame }: Props) => {
  //Can do a lot with this like, website, metascore link, reddit link, stores link...
  //But uses a lot of fetches
  //Could try and use it only when i click on a card
  //const { data } = useSpecificGame(game.id);

  const [focused, setFocused] = useState(false);
  let platforms: Platform[] = [];

  if (game.parent_platforms) {
    platforms = game.parent_platforms.map((platform) => platform.platform);
  }

  return (
    <Card.Root
      onMouseEnter={() => game.short_screenshots.length > 1 && setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      _hover={{
        border: "2px solid " + mainColorAlpha,
      }}
      transition="border 100ms ease-in-out"
      onClick={() => onSelectedGame(game)}
      //background={gameSelected?.id == game.id ? mainColorAlpha : "black"}
      //cursor="pointer"
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
