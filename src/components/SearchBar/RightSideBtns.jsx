import React, { useState } from 'react';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBarContainer } from '../SideBar/SideBarContainer';

export const RightSideBtns = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onMenuClick = () => {
    setDrawerOpen(true);
  };

  return window.innerWidth < 900 ? (
    <div className="flex justify-between w-full pt-4">
      <IconButton sx={{ color: '#d4d7dd' }} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <div>
        <IconButton sx={{ color: '#d4d7dd' }}>
          <WbSunnyOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: '#d4d7dd' }}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <SideBarContainer />
      </Drawer>
    </div>
  ) : (
    <div>
      <IconButton sx={{ color: '#d4d7dd' }}>
        <WbSunnyOutlinedIcon />
      </IconButton>
      <IconButton sx={{ color: '#d4d7dd' }}>
        <MoreVertOutlinedIcon />
      </IconButton>
    </div>
  );
};
