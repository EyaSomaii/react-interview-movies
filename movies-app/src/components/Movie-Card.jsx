import React, { useState } from "react";
import { Box, Text, Progress, Button, HStack } from "@chakra-ui/react";

export const MovieCard = ({
  title,
  category,
  initialLikes,
  initialDislikes,
  onDelete,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [isLiked, setIsLiked] = useState(null);

  const total = likes + dislikes;
  const likePercentage = total > 0 ? (likes / total) * 100 : 0;

  const ToggeleLikeDislike = () => {
    if (isLiked === true) {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setIsLiked(false);
    } else if (isLiked === false) {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setIsLiked(true);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      boxShadow="md"
      bg="white"
      width="100%"
    >
      <Text fontWeight="bold" fontSize="xl" mb="2">
        Title : {title}
      </Text>
      <Text color="gray.500" mb="4">
        Category : {category}
      </Text>
      <Progress colorScheme="green" size="sm" value={likePercentage} mb="2" />
      <Text fontSize="sm">
        {likes} Likes / {dislikes} Dislikes
      </Text>
      <hr />
      <br />
      <HStack spacing="4">
        <Button variant="solid" colorScheme="red" onClick={onDelete}>
          Delete
        </Button>
        <Button
          variant="outline"
          colorScheme={
            isLiked === true ? "green" : isLiked === false ? "red" : "gray"
          }
          onClick={ToggeleLikeDislike}
        >
          {isLiked === true ? "Dislike" : "Like"}
        </Button>
      </HStack>
    </Box>
  );
};
