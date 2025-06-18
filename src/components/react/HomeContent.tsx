import React from 'react';
import { Box } from '@mui/material';
import SearchComponent from './SearchComponent';

interface HomeContentProps {
  specialists?: Record<string, any>;
}

const HomeContent: React.FC<HomeContentProps> = ({ specialists = {} }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main Search Interface */}
      <SearchComponent specialists={specialists} />
    </Box>
  );
};

export default HomeContent;
