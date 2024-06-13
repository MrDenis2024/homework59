import React from 'react';
import {MovieInterface} from '../../../types';
import './MovieItem.css';

interface Props {
  movie: MovieInterface;
}

const MovieItem: React.FC<Props> = ({movie}) => {
  return (
    <div className='movie-item'>
      <input className='input-movie' type="text" defaultValue={movie.title}/>
      <button className='delete-movie'>Удалить</button>
    </div>
  );
};

export default MovieItem;