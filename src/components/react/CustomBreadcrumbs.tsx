import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs: React.FC = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon sx={{ fontSize: 'small' }} />}
      sx={{ 
        mb: 4,
        '& .MuiBreadcrumbs-separator': { color: '#C9A96E' },
        '& a': { color: '#C9A96E', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }
      }}
    >
      <Link href="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 0.5, fontSize: 'inherit' }} />
        Home
      </Link>
      <Typography color="text.primary">Browse All Specialists</Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
