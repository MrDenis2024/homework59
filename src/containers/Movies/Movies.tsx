import React, {ChangeEvent, useEffect, useState} from 'react';
import {MovieInterface} from '../../types';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoviesForm from '../../components/MoviesForm/MoviesForm';
import './Movies.css';


const Movies = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [currentMovie, setCurrentMovie] = useState('');

  useEffect(() => {
    const storage = localStorage.getItem('movies');
    if(storage !== null) {
      setMovies(JSON.parse(storage));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);


  const movieChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMovie(event.target.value);
  };

  const removeMovie = (id: string) => {
    setMovies((prevState) => {
      return prevState.filter((movie) => movie.id !== id);
    });
  };

  const changeMovie = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    setMovies((prevState) => {
      return prevState.map((movie) => {
        if(movie.id === id) {
          return {...movie, title: event.target.value};
        }

        return movie;
      });
    });
  };

  const addMovie = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMovie = {
      id: Math.random().toString(),
      title: currentMovie,
    };
    setMovies((prevState) => {
      return [...prevState, newMovie];
    });
    setCurrentMovie('');
  };

  return (
    <div className='block-movies'>
      <MoviesForm onCurrentMovie={currentMovie} onMovieChange={(event) => movieChange(event)} onNewMovie={(event) => addMovie(event)} />
      <h2>To watch list:</h2>
      <MoviesList movies={movies} onRemove={removeMovie} onChangeMovie={changeMovie} />
    </div>
  );
};

export default Movies;