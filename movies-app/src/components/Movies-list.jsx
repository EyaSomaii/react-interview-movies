import React, { useState, useEffect } from 'react';
import {AbsoluteCenter, Badge, Box, Divider, SimpleGrid } from '@chakra-ui/react';
import { movies$ } from '../data/movies'
import {MovieCard}  from'../components/Movie-Card'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    movies$.then((data) => setMovies(data));
  }, []);


  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };
  return (
    <>
    <Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='30'>
  <Badge colorScheme='purple'fontSize='1.5em'>Movies List </Badge>

  </AbsoluteCenter>
</Box>
    <SimpleGrid columns={[1, 2, 3]} spacing="20px" p="20px">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          category={movie.category}
          initialLikes={movie.likes}
          initialDislikes={movie.dislikes}
          onDelete={() => handleDelete(movie.id)} // Passer la fonction de suppression

        />
      ))}
    </SimpleGrid>
    </>
  );
};

export default MovieList;
