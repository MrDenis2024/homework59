import React, {MouseEventHandler} from 'react';

interface Props {
  title: string;
  onNewJoke: MouseEventHandler;
}

const JokeBtn: React.FC<Props> = React.memo(({title, onNewJoke}) => {

  return (
    <>
      <button className='add-joke' onClick={onNewJoke}>{title}</button>
    </>
  );
}, (prevProps, nextProps) => {
  return nextProps.title === prevProps.title;
});

export default JokeBtn;