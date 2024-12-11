import { Flex, Image, Link, List, VStack } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { FaGamepad } from "react-icons/fa";
import { mainColor } from "../main";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return null;

  if (isLoading) {
    return (
      <List.Root variant="plain">
        {skeletons.map((skeleton) => (
          <VStack paddingY={2}>
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          </VStack>
        ))}
      </List.Root>
    );
  }

  return (
    <>
      <List.Root variant={"plain"} gap={4}>
        <List.Item key="all">
          <Flex gap={2}>
            <FaGamepad size={30}></FaGamepad>
            <Link onClick={() => onSelectGenre(null)} fontSize="2xl">
              All Genres
            </Link>
          </Flex>
        </List.Item>
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <Flex gap={2} alignItems="center">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={selectedGenre?.id == genre.id ? "40px" : "32px"}
                borderRadius={8}
                border={
                  selectedGenre?.id == genre.id
                    ? "1px solid " + mainColor
                    : "1px"
                }
                transition="all 0.2s ease-in-out"
              ></Image>
              <Link
                onClick={() => onSelectGenre(genre)}
                fontSize="2xl"
                variant={selectedGenre?.id == genre.id ? "underline" : "plain"}
                colorPalette={selectedGenre?.id == genre.id ? "red" : "gray"}
                animation={selectedGenre?.id == genre.id ? "bounce" : "null"}
              >
                {genre.name}
              </Link>
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
