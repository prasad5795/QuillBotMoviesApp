import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { motion, useAnimate } from 'framer-motion';
import React, { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: 'transparent',
  marginLeft: 0,
  width: 0,
  borderRadius: '5px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  opacity: 0,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    width: '100%',
    borderRadius: '5px',
    zIndex: 0,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  opacity: 0,
  color: '#d4d7dd',
  borderRadius: 0,
  height: '39px',
  position: 'absolute',
  right: 0,
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
}));

export const SearchBar = () => {
  const [searchScope, animateSearch] = useAnimate();
  const [inputTextScope, animateInputText] = useAnimate();
  const [clearBtnScope, animateClearBtn] = useAnimate();
  const inputTextRef = useRef();
  const { setSearchBarText, setExpandedMovieId } = useContext(AppContext);

  const handleClearClick = () => {
    setExpandedMovieId(null);
    setSearchBarText('');
    inputTextRef.current.value = '';
  };

  const handleSearchClick = () => {
    animateSearch(
      searchScope.current,
      {
        width: window.innerWidth < 900 ? '100%' : '50vh',
        backgroundColor: '#1A2536',
      },
      {
        duration: 2,
      }
    );
    animateInputText(
      inputTextScope.current,
      {
        opacity: 1,
      },
      {
        delay: 2,
        duration: 2,
      }
    );
    animateClearBtn(
      clearBtnScope.current,
      {
        opacity: 1,
      },
      {
        delay: 2,
        duration: 2,
      }
    );
    setExpandedMovieId(null);
    setSearchBarText(inputTextRef.current.value);
  };

  return window.innerWidth < 900 ? (
    <motion.div initial={{ backgroundColor: 'transparent' }} className="w-full">
      <Search ref={searchScope}>
        <IconButton
          sx={{
            color: '#d4d7dd',
          }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
        <StyledInputBase
          placeholder="Title, Movies, Keyword"
          inputProps={{ 'aria-label': 'search' }}
          inputRef={inputTextRef}
          ref={inputTextScope}
        />
        <StyledIconButton ref={clearBtnScope} onClick={handleClearClick}>
          <CloseOutlinedIcon />
        </StyledIconButton>
      </Search>
    </motion.div>
  ) : (
    <motion.div className="flex" initial={{ backgroundColor: 'transparent' }}>
      <Search ref={searchScope}>
        <IconButton
          sx={{
            color: '#d4d7dd',
          }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
        <StyledInputBase
          placeholder="Title, Movies, Keyword"
          inputProps={{ 'aria-label': 'search' }}
          inputRef={inputTextRef}
          ref={inputTextScope}
        />
        <StyledIconButton ref={clearBtnScope} onClick={handleClearClick}>
          <CloseOutlinedIcon />
        </StyledIconButton>
      </Search>
    </motion.div>
  );
};
