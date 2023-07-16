import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { MovieList } from './Movie/MovieList';
import { SideBarContainer } from './SideBar/SideBarContainer';
import { SearchBarContainer } from './SearchBar/SearchBarContainer';
import { AppContext } from '../context/AppContext';

export const Container = () => {
  const [isHamburgerEnabled, setIsHamburgerEnabled] = useState(false);
  const [searchBarText, setSearchBarText] = useState('');
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 900) {
      setIsHamburgerEnabled(true);
    } else {
      setIsHamburgerEnabled(false);
    }
  }, []);

  useLayoutEffect(() => {
    handleResize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);

  const appContext = {
    searchBarText,
    setSearchBarText,
    expandedMovieId,
    setExpandedMovieId,
  };

  return (
    <AppContext.Provider value={appContext}>
      <Grid container className="min-h-screen">
        {!isHamburgerEnabled && (
          <Grid item xs={0} md={2.5} className="bg-[#1f2a3c]">
            <SideBarContainer />
          </Grid>
        )}

        <Grid item xs={12} md={9.5} className="bg-[#273244] px-[7%]">
          <SearchBarContainer />
          <MovieList />
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
};
