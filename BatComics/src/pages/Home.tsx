import React, { useState, useEffect } from 'react';
import ComicList from '../components/ComicList';
import { batmanComics } from '../data/data';
import type { Comic } from '../types';

const Home: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComics(batmanComics);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ComicList comics={comics} />
    </>
  );
};

export default Home;