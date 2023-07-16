import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

export const AvatarComponent = () => {
  return (
    <Box
      sx={{
        height: '25vh',
      }}
      className="flex justify-end items-center flex-col gap-2"
    >
      <Avatar
        sx={{ height: '70px', width: '70px' }}
        alt="Eric Hoffman"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Typography variant="h6" gutterBottom sx={{ color: '#d4d7dd' }}>
        Eric Hoffman
      </Typography>
    </Box>
  );
};
