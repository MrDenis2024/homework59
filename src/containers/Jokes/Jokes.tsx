import {useEffect, useState} from 'react';
import JokeBtn from '../../components/JokeBtn/JokeBtn';
import './Jokes.css';

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if(response.ok) {
        const jokes = await response.json();
        const newPost = jokes.value;

        setJoke(newPost);
      } else {
        console.error('Ошибка получения данных');
      }
    } catch (e) {
      console.error('Ошибка ' + e);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <div className='block-joke'>
      <h2>Chuck Norris joke</h2>
      <div className='joke'>
        {joke}
      </div>
      <JokeBtn title='New joke' onNewJoke={fetchData} />
    </div>
  );
};

export default Jokes;