import React from 'react';
import './MoviesForm.css';

interface Props {
  onCurrentMovie: string
  onNewMovie: React.ChangeEventHandler<HTMLFormElement>;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MoviesForm: React.FC<Props> = ({onCurrentMovie,onNewMovie, onMovieChange}) => {
  return (
    <form className='movie-form' onSubmit={onNewMovie}>
      <input type="text" className='input-form' placeholder='Ведите название фильма или сериала' value={onCurrentMovie} onChange={onMovieChange} required/>
      <button type='submit' className='add-movie'>Add</button>
    </form>
  );
};

export default MoviesForm;