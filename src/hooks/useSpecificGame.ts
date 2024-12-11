import useData from "./useData";
import { Game } from "./useGames";

const useSpecificGame = (id: number) => useData<Game>("games/" + id);

export default useSpecificGame;
