import React from 'react';
import MovieItem from './MovieItem';
import {MovieInterface} from '../../../types';

interface Props {
  movies: MovieInterface[];
  onRemove: (id: string) => void;
  onChangeMovie: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const MoviesList: React.FC<Props> = ({movies, onRemove, onChangeMovie}) => {
  return (
    <>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} deleteFilm={() => onRemove(movie.id)} changeMovie={(event) => onChangeMovie(event, movie.id)} />
      ))}
    </>
  );
};

export default MoviesList;