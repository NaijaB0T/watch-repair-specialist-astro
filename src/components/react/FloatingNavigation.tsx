import React, { useState } from 'react';
import {
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

const FloatingNavigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const actions = [
    { icon: <HomeIcon />, name: 'Home', href: '/' },
    { icon: <ListIcon />, name: 'Browse All', href: '/browse/1' },
    { icon: <InfoIcon />, name: 'About', href: '/about' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <SpeedDial
        ariaLabel="Navigation Menu"
        icon={<SpeedDialIcon icon={<SettingsIcon />} openIcon={<CloseIcon />} />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="up"
        sx={{
          '& .MuiSpeedDial-fab': {
            background: 'linear-gradient(135deg, #C9A96E 0%, #8B7355 100%)',
            border: '2px solid #95A5A6',
            width: 64,
            height: 64,
            '&:hover': {
              background: 'linear-gradient(135deg, #E6C78A 0%, #C9A96E 100%)',
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              window.location.href = action.href;
              setOpen(false);
            }}
            sx={{
              '& .MuiSpeedDialAction-fab': {
                background: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
                border: '1px solid #C9A96E',
                color: '#C9A96E',
                '&:hover': {
                  background: 'linear-gradient(135deg, #C9A96E 0%, #8B7355 100%)',
                  color: '#1A1A1A',
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default FloatingNavigation;
