import React, {MouseEventHandler} from 'react';
import {MovieInterface} from '../../../types';
import './MovieItem.css';

interface Props {
  movie: MovieInterface;
  deleteFilm: MouseEventHandler;
  changeMovie: React.ChangeEventHandler<HTMLInputElement>;
}

const MovieItem: React.FC<Props> = React.memo(({movie, deleteFilm, changeMovie}) => {
  return (
    <div className='movie-item'>
      <input className='input-movie' type="text" value={movie.title} onChange={changeMovie}/>
      <button className='delete-movie' onClick={deleteFilm}>Удалить</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.movie.title === prevProps.movie.title;
});

export default MovieItem;