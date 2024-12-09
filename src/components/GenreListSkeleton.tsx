import { HStack } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "./ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <HStack width="full" gap={2}>
      <SkeletonCircle size="7"></SkeletonCircle>
      <SkeletonText noOfLines={1} width={20}></SkeletonText>
    </HStack>
  );
};

export default GenreListSkeleton;
