import React, { useState, useEffect } from 'react';
import {
  AbsoluteCenter,
  Badge,
  Box,
  Divider,
  SimpleGrid,
  CheckboxGroup,
  Checkbox,
  VStack,
  Button,
  HStack,
  Select,Text
} from '@chakra-ui/react';
import { movies$ } from '../data/movies';
import { MovieCard } from '../components/Movie-Card';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    movies$.then((data) => {
      setMovies(data);
      const uniqueCategories = [...new Set(data.map((movie) => movie.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);

    const remainingCategories = [
      ...new Set(updatedMovies.map((movie) => movie.category)),
    ];
    setCategories(remainingCategories);

    if (!remainingCategories.includes(selectedCategories)) {
      setSelectedCategories([]);
    }
  };
// Reset to first page when changing categories
  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
    setCurrentPage(1); 
  };
// Reset to first page when changing items per page
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); 
  };

  const filteredMovies = selectedCategories.length
    ? movies.filter((movie) => selectedCategories.includes(movie.category))
    : movies;

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="30">
          <Badge colorScheme="purple" fontSize="1.5em">
            Movies List
          </Badge>
        </AbsoluteCenter>
      </Box>

      <VStack align="start" p="20px">
        <CheckboxGroup
          value={selectedCategories}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <Checkbox key={category} value={category}>
              {category}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </VStack>

      <Select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        width="150px"
        margin="20px"
      >
        <option value={4}>4 per page</option>
        <option value={8}>8 per page</option>
        <option value={12}>12 per page</option>
      </Select>

      <SimpleGrid columns={[1, 2, 3]} spacing="20px" p="20px">
        {displayedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            category={movie.category}
            initialLikes={movie.likes}
            initialDislikes={movie.dislikes}
            onDelete={() => handleDelete(movie.id)}
          />
        ))}
      </SimpleGrid>

      <HStack spacing="4" justify="center" p="20px">
        <Button
          onClick={handlePreviousPage}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Text>{currentPage} / {totalPages}</Text>
        <Button
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </>
  );
};

export default MovieList;
