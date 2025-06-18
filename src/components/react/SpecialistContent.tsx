import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  CssBaseline, 
  Box, 
  Container, 
  Card, 
  CardContent, 
  CardMedia,
  Typography, 
  Button, 
  Rating,
  Breadcrumbs,
  Link,
  Chip,
  Divider
} from '@mui/material';
import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AnimatedBackground from './AnimatedBackground';
import FloatingNavigation from './FloatingNavigation';
import watchmakerTheme from '../../theme/watchmakerTheme';
import specialistsData from '../../data/specialists.json';
// import '../../styles/global.css'; // Global CSS is handled by Astro, no need to import here

interface Specialist {
  unique_id: string;
  source_url: string;
  name: string;
  website: string;
  phone: string;
  rating: number;
  review_count: number;
  image_url: string;
  address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  google_maps_url: string;
  nearby_specialists_ids: string[];
}

interface SpecialistContentProps {
  specialist: Specialist;
}

const createSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const SpecialistContent: React.FC<SpecialistContentProps> = ({ specialist }) => {
  // Get nearby specialists
  const nearbySpecialists = (specialist.nearby_specialists_ids as string[])
    .map((id: string) => {
      return (specialistsData as Record<string, Specialist>)[id];
    })
    .filter(Boolean)
    .slice(0, 3);

  return (
    <ThemeProvider theme={watchmakerTheme}>
      <CssBaseline />
      
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <AnimatedBackground />
        
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
            <Link href="/">Search Results</Link>
            <Typography color="text.primary">{specialist.name}</Typography>
          </Breadcrumbs>

          <Grid container spacing={4}>
            {/* Left Column - Image and Basic Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                <Card 
                  sx={{ 
                    mb: 3,
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
                    border: '2px solid #C9A96E',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={specialist.image_url}
                    alt={`${specialist.name} watch repair shop`}
                    sx={{
                      objectFit: 'cover',
                      filter: 'brightness(0.9) contrast(1.1)',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                      {specialist.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating
                        value={specialist.rating}
                        readOnly
                        precision={0.1}
                        size="large"
                      />
                      <Typography variant="h4" sx={{ ml: 2 }}>
                        {specialist.rating}
                      </Typography>
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        ({specialist.review_count} reviews)
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: '#C9A96E' }} />

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ mr: 1, color: '#C9A96E' }} />
                        Address
                      </Typography>
                      <Typography variant="body1">
                        {specialist.address.street_address}<br />
                        {specialist.address.city}, {specialist.address.state} {specialist.address.postal_code}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                      <Button
                        variant="contained"
                        href={`tel:${specialist.phone}`}
                        startIcon={<PhoneIcon />}
                        fullWidth
                        size="large"
                      >
                        Call {specialist.phone}
                      </Button>
                      
                      <Button
                        variant="outlined"
                        href={specialist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LanguageIcon />}
                        fullWidth
                        sx={{
                          borderColor: '#C9A96E',
                          color: '#C9A96E',
                          '&:hover': {
                            borderColor: '#E6C78A',
                            backgroundColor: 'rgba(201, 169, 110, 0.1)',
                          },
                        }}
                      >
                        Visit Website
                      </Button>
                      
                      <Button
                        variant="outlined"
                        href={specialist.google_maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LocationOnIcon />}
                        fullWidth
                        sx={{
                          borderColor: '#95A5A6',
                          color: '#95A5A6',
                          '&:hover': {
                            borderColor: '#BDC3C7',
                            backgroundColor: 'rgba(149, 165, 166, 0.1)',
                          },
                        }}
                      >
                        View on Google Maps
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Right Column - Details and Nearby Specialists */}
            <Grid size={{ xs: 12, md: 7 }}>
              {/* Services and Expertise Section */}
              <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h3" gutterBottom>
                  Master Horologist Services
                </Typography>
                <Typography variant="body1" paragraph>
                  {specialist.name} is a certified master watchmaker specializing in precision timepiece restoration 
                  and repair services. Our expertise covers luxury mechanical watches, vintage timepieces, 
                  and modern complications.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                  {['Mechanical Watch Repair', 'Movement Servicing', 'Crystal Replacement', 'Crown & Stem Repair', 'Strap Restoration'].map((service) => (
                    <Chip
                      key={service}
                      label={service}
                      sx={{
                        backgroundColor: '#C9A96E',
                        color: '#1A1A1A',
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Box>
              </Card>

              {/* Quality Assurance */}
              <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h3" gutterBottom>
                  Quality & Experience
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h2" sx={{ color: '#C9A96E' }}>
                        {specialist.rating}
                      </Typography>
                      <Typography variant="body2">
                        Customer Rating
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h2" sx={{ color: '#C9A96E' }}>
                        {specialist.review_count}+
                      </Typography>
                      <Typography variant="body2">
                        Satisfied Customers
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>

              {/* Nearby Specialists */}
              {nearbySpecialists.length > 0 && (
                <Card sx={{ p: 3 }}>
                  <Typography variant="h3" gutterBottom>
                    Other Master Watchmakers Nearby
                  </Typography>
                  <Grid container spacing={2}>
                    {nearbySpecialists.map((nearby: Specialist) => {
                      return (
                        <Grid size={{ xs: 12, sm: 6, md: 12, lg: 6 }} key={nearby.unique_id}>
                          <Card 
                            sx={{ 
                              p: 2, 
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                              }
                            }}
                            onClick={() => {
                              window.location.href = `/specialist/${nearby.unique_id}/${createSlug(nearby.name)}`;
                            }}
                          >
                            <Typography variant="h4" gutterBottom>
                              {nearby.name}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              {nearby.address.city}, {nearby.address.state}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Rating
                                value={nearby.rating}
                                readOnly
                                precision={0.1}
                                size="small"
                              />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                ({nearby.review_count})
                              </Typography>
                            </Box>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Card>
              )}
            </Grid>
          </Grid>
        </Container>
        
        <FloatingNavigation />
      </Box>
    </ThemeProvider>
  );
};

export default SpecialistContent;
