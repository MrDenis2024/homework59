import React, {useState} from 'react';
import {MovieInterface} from '../../../types';
import MoviesList from '../../components/MoviesList/MoviesList';
import './Movies.css';


const Movies = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([
    {id: '1', title: 'Harry Potter'},
    {id: '2', title: 'Spider Man'},
    {id: '3', title: 'Taxi'},
  ]);


  const removeMovie = (id: string) => {
    setMovies((prevState) => {
      return prevState.filter((movie) => movie.id !== id);
    });
  };

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const movieCopy = movies.map((movie) => {
      if(movie.id === id) {
        return {...movie, title: event.target.value};
      }

      return movie;
    });

    setMovies(movieCopy);
  };

  return (
    <div className='block-movies'>
      <h2>To watch list:</h2>
      <MoviesList movies={movies} onRemove={removeMovie} onChangeMovie={changeMovie} />
    </div>
  );
};

export default Movies;