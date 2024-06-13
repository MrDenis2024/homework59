import {useState} from 'react';
import {MovieInterface} from '../../../types';
import './Movies.css';
import MovieItem from '../../components/Movies/MovieItem';


const Movies = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([
    {id: '1', title: 'Harry Potter'},
    {id: '2', title: 'Spider Man'},
    {id: '3', title: 'Taxi'},
  ]);

  return (
    <div className='block-movies'>
      <h2>To watch list:</h2>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;