import { GameQuery } from "@/App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  short_screenshots: ScreenShot[];
}

export interface ScreenShot {
  id: number;
  image: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
