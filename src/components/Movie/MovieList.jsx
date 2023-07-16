import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import movieData from '../../movies-data.json';
import { MovieExpanded } from './MovieExpanded';
import { MovieTile } from './MovieTile';

export const MovieList = () => {
  const { expandedMovieId, setExpandedMovieId, searchBarText } =
    useContext(AppContext);

  const [expandedMovie, setExpandedMovie] = useState(null);

  const movieTileClicked = (movie) => {
    const { expandableTileId } = movie;
    setExpandedMovieId(expandableTileId);
    setExpandedMovie(movie);
  };

  const handleOnAnimationEnd = () => {
    try {
      if (expandedMovieId) {
        const toExpandedEl = document.getElementById(
          expandedMovie.expandableTileId
        );
        const { top, left } = toExpandedEl.getBoundingClientRect();
        toExpandedEl.scrollTo(left, top);
        toExpandedEl.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } catch (e) {}
  };

  const movieDataWithExpandableItems = [];
  const filteredMovieData = searchBarText
    ? movieData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchBarText.toLowerCase())
      )
    : movieData;

  for (let index = 0; index < filteredMovieData.length; index++) {
    const element = filteredMovieData[index];
    let divider = 5;
    if (window.innerWidth < 900) {
      divider = 2;
    }
    const currentExpandableTileId = Math.floor(index / divider);
    if (index % divider === 0) {
      movieDataWithExpandableItems.push({
        tileType: 'expandable',
        id: `e${currentExpandableTileId}`,
      });
    }
    movieDataWithExpandableItems.push({
      ...element,
      expandableTileId: `e${currentExpandableTileId}`,
    });
  }
  const movies = movieDataWithExpandableItems.map((movie, index) =>
    movie.tileType === 'expandable' ? (
      <motion.div
        className="col-span-2 md:col-span-5"
        key={movie.id}
        id={movie.id}
        initial={{ height: 0 }}
        animate={{ height: expandedMovieId === movie.id ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        onAnimationComplete={handleOnAnimationEnd}
      >
        {expandedMovieId === movie.id && (
          <MovieExpanded movie={expandedMovie} />
        )}
      </motion.div>
    ) : (
      <div
        key={movie.imdbID}
        className={
          expandedMovieId &&
          expandedMovie &&
          expandedMovie.imdbID === movie.imdbID
            ? `border-4 border-[#00E0FF] rounded-[13px]`
            : `border-0`
        }
      >
        <MovieTile movie={movie} movieTileClicked={movieTileClicked} />
      </div>
    )
  );

  if (movies.length === 0) {
    return (
      <div className="App flex justify-start text-[#d4d7dd]">
        No results found for your search.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-3">
      {movies}
    </div>
  );
};
