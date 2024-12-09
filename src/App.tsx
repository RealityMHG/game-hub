import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import useWidth from "./hooks/useWidth";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector, { SortOrder } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SidePanel from "./components/SidePanel";
import { mainColor } from "./main";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [panelStatus, SetPanelStatus] = useState(false);

  const { sidePanel } = useWidth();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //>1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></Navbar>
      </GridItem>
      <Show when={panelStatus && sidePanel}>
        <GridItem
          area={"aside"}
          position="absolute"
          zIndex={100}
          right={1}
          border={"2px solid " + mainColor}
          background={{ base: "whiteAlpha.800", _dark: "blackAlpha.800" }}
          borderRadius={15}
          marginY="200px"
          padding={5}
        >
          <GenreList
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
              SetPanelStatus(!panelStatus);
            }}
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <Show when={!sidePanel}>
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"} className="game-grid">
        <Box marginLeft="40px">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex gap={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            ></PlatformSelector>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            ></SortSelector>
            <Show when={sidePanel}>
              <SidePanel
                onPanelClick={() => SetPanelStatus(!panelStatus)}
                panelStatus={panelStatus}
              ></SidePanel>
            </Show>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
