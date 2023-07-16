import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

export const MovieTile = ({ movie, movieTileClicked }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#394b61',
        borderRadius: 3,
        color: '#d4d7dd',
        height: '100%',
      }}
      onClick={() => movieTileClicked(movie)}
    >
      <CardMedia
        sx={{ maxHeight: 230, objectFit: 'fill', padding: 1, borderRadius: 3 }}
        src={movie.Poster}
        style={{ borderRadius: 20 }}
        component="img"
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          sx={{ textAlign: 'left' }}
        >
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <IconButton
          sx={{
            paddingTop: 0,
            paddingRight: 0,
            paddingLeft: 0.5,
            color: '#d4d7dd',
          }}
        >
          <PlayCircleFilledWhiteOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            paddingTop: 0,
            paddingRight: 0,
            paddingLeft: 0.5,
            color: '#d4d7dd',
          }}
        >
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
