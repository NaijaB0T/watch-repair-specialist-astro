import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Grid,
  Breadcrumbs,
  Link
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WatchIcon from '@mui/icons-material/Watch';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

const AboutContent: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
      {/* Breadcrumbs */}
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
        <Typography color="text.primary">About</Typography>
      </Breadcrumbs>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Card sx={{ p: 4, mb: 4 }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
              About Chrono-Finder
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              The Artisan's Directory for Master Watchmakers
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              In an era where precision timekeeping has evolved into a digital convenience, the art of traditional 
              horology remains a testament to human craftsmanship and mechanical ingenuity. Chrono-Finder was born 
              from a passion for preserving this ancient craft and connecting timepiece enthusiasts with the master 
              artisans who can breathe life back into their cherished mechanical companions.
            </Typography>

            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our curated directory features only the most skilled and certified watch repair specialists across 
              the United States. Each horologist in our network has been carefully selected based on their 
              expertise, customer satisfaction, and commitment to the traditional values of precision and excellence 
              that define the watchmaking craft.
            </Typography>
          </Card>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4
          }}>
          <Card sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{ color: '#C9A96E', mb: 2 }}>
              <SearchIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h3" gutterBottom>
              Expert Discovery
            </Typography>
            <Typography variant="body1">
              Find certified master watchmakers and horologists in your area with our 
              intelligent search system designed for precision and convenience.
            </Typography>
          </Card>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4
          }}>
          <Card sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{ color: '#C9A96E', mb: 2 }}>
              <StarIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h3" gutterBottom>
              Verified Quality
            </Typography>
            <Typography variant="body1">
              Every specialist in our directory is verified for expertise and maintains 
              high customer satisfaction ratings from real timepiece owners.
            </Typography>
          </Card>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4
          }}>
          <Card sx={{ p: 3, height: '100%', textAlign: 'center' }}>
            <Box sx={{ color: '#C9A96E', mb: 2 }}>
              <WatchIcon sx={{ fontSize: 60 }} />
            </Box>
            <Typography variant="h3" gutterBottom>
              Craft Preservation
            </Typography>
            <Typography variant="body1">
              We're dedicated to preserving the ancient art of horology by connecting 
              timepiece owners with masters who honor traditional craftsmanship.
            </Typography>
          </Card>
        </Grid>

        <Grid size={12}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              At Chrono-Finder, we believe that every timepiece tells a story—not just of the hours that have passed, 
              but of the craftsmanship, innovation, and artistry that went into its creation. Our mission is to ensure 
              that these stories continue to be told by connecting timepiece owners with the skilled artisans who can 
              maintain, restore, and preserve these mechanical marvels for future generations.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Whether you own a vintage pocket watch passed down through generations, a luxury Swiss timepiece, 
              or a modern mechanical marvel, Chrono-Finder helps you find the master horologist who can provide 
              the expert care your timepiece deserves. We're not just a directory—we're guardians of the 
              horological tradition.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutContent;
