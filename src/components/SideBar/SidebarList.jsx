import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styled from 'styled-components';

export const SidebarList = () => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <StyledList>
          <ListItem selected>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <SearchOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Discover" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <PlaylistPlayOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Playlist" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <LiveTvOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Movie" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <DesktopWindowsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="TV Shows" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <ListOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My List" />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </nav>
      <Divider sx={{ borderColor: '#334358', borderWidth: '1px' }} />
      <nav aria-label="main mailbox folders">
        <StyledList>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <UpdateOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Watch Later" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <FavoriteBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Recommended" />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </nav>
      <Divider sx={{ borderColor: '#334358', borderWidth: '1px' }} />
      <nav aria-label="main mailbox folders">
        <StyledList>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </StyledList>
      </nav>
    </>
  );
};

const StyledList = styled(List)`
  .MuiListItemIcon-root,
  .MuiListItemText-root {
    color: #d4d7dd;
  }
  .Mui-selected {
    color: #00e0ff;
    background-color: transparent !important;
    border-right: 5px solid;
  }
  .Mui-selected .MuiListItemIcon-root,
  .Mui-selected .MuiListItemText-root {
    color: #00e0ff;
  }
  .MuiListItem-root {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
