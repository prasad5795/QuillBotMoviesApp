import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledLinearProgress = styled(LinearProgress)`
  width: 17vh;
  height: 0.4rem !important;
  border-radius: 1rem;
  margin-right: 1rem;
  background-color: #283647 !important;
  .MuiLinearProgress-bar {
    background-color: #00e0ff !important;
  }
`;

const MotionGrid = motion(Grid);
export const MovieExpanded = ({ movie }) => {
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    if (ratings) {
      setRatings(
        isNaN(parseFloat(movie.imdbRating) * 10)
          ? 0
          : parseFloat(movie.imdbRating) * 10
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.imdbRating]);
  return (
    <MotionGrid
      container
      sx={{ backgroundColor: '#394b61' }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
      className="rounded-lg"
    >
      <MotionGrid
        item
        xs={12}
        md={4}
        className="bg-[#1f2a3c] h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
      >
        <CardMedia
          src={movie.Poster}
          component="img"
          className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full"
        />
      </MotionGrid>
      <MotionGrid
        item
        xs={12}
        md={8}
        className="bg-[transparent] px-[5%] pt-[3%] justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setRatings(
              isNaN(parseFloat(movie.imdbRating) * 10)
                ? 0.1
                : parseFloat(movie.imdbRating) * 10
            );
          }, 0);
        }}
      >
        <CardContent className="text-[#d4d7dd] !py-0 mt-2 sm:mt-0">
          <Typography
            variant="h5"
            gutterBottom
            className="flex justify-start py-0 !font-[700]"
          >
            {movie.Title}
          </Typography>
        </CardContent>
        <CardContent className="flex justify-left items-center mb-5">
          <StyledLinearProgress variant="determinate" value={ratings} />
          <Typography className="text-white">{movie.imdbRating}/10</Typography>
        </CardContent>
        <CardContent className="text-[#d4d7dd] text-left font-medium">
          <Grid container spacing={5}>
            <Grid item className="!pt-0">
              <div className="mb-2">Year:</div>
              <div className="mb-2">Running Time:</div>
              <div className="mb-2">Directed by:</div>
              <div className="mb-2">language:</div>
            </Grid>
            <Grid item className="!pt-0">
              <div className="mb-2">{movie.Year}</div>
              <div className="mb-2">{movie.Runtime}</div>
              <div className="mb-2">{movie.Director}</div>
              <div className="mb-2">{movie.Language}</div>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className="text-left text-[#d4d7dd]">
          {movie.Plot}
        </CardContent>
        <CardContent className="text-left text-[#d4d7dd] flex gap-4 !py-4">
          <Button
            variant="contained"
            sx={{ backgroundColor: '#00E0FF', color: '#000' }}
          >
            Play Movie
          </Button>
          <Button
            variant="outlined"
            sx={{ color: '#00E0FF', border: '1px solid #00E0FF' }}
          >
            Watch Trailer
          </Button>
        </CardContent>
      </MotionGrid>
    </MotionGrid>
  );
};
