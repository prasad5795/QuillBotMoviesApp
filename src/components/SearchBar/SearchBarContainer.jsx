import { Box } from '@mui/material';
import React from 'react';
import { SearchBar } from './SearchBar';
import { RightSideBtns } from './RightSideBtns';

export const SearchBarContainer = () => {
  return (
    <Box
      sx={{
        height: '10vh',
      }}
      className="flex flex-col-reverse sm:flex-row justify-between text-white items-end pb-[1%]"
    >
      <SearchBar />
      <RightSideBtns />
    </Box>
  );
};
