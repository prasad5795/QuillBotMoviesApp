import React from 'react';
import { AvatarComponent } from './AvatarComponent';
import { SidebarList } from './SidebarList';
import { Divider } from '@mui/material';

export const SideBarContainer = () => {
  return (
    <div className='bg-[#1f2a3c] h-full'>
      <AvatarComponent></AvatarComponent>
      <Divider sx={{ borderColor: '#334358', borderWidth: '1px' }} />
      <SidebarList></SidebarList>
    </div>
  );
};
