import React, { useState, useEffect } from 'react';
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Rating,
  Button,
  Box,
  Grid,
  Fade,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

interface Specialist {
  unique_id: string;
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
}

interface SearchComponentProps {
  specialists: Record<string, Specialist>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ specialists }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Specialist[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = Object.values(specialists).filter(specialist =>
        specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.address.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.address.postal_code.includes(searchTerm)
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm, specialists]);

  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          justifyContent: 'center',
          paddingY: 4,
        }}
      >
        {/* Main Search Bar */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            background: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
            border: '2px solid #C9A96E',
            borderRadius: '20px',
            padding: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(201, 169, 110, 0.3)',
            marginBottom: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              marginBottom: 3,
              background: 'linear-gradient(135deg, #C9A96E 0%, #E6C78A 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Chrono-Finder
          </Typography>
          
          <TextField
            fullWidth
            placeholder="Find a Master Watchmaker... (City, State, or Zip)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: '#C9A96E', marginRight: 2 }} />,
              sx: {
                fontSize: '1.2rem',
                padding: '8px',
                '&::placeholder': {
                  color: '#C9A96E',
                  opacity: 1, // Ensure the color is not affected by default opacity
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '60px',
                color: '#C9A96E', // Color for the actual input text
              },
            }}
          />
        </Box>

        {/* Search Results */}
        <Fade in={showResults}>
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            {searchResults.length > 0 && (
              <Grid container spacing={3}>
                {searchResults.slice(0, 6).map((specialist) => (
                  <Grid
                    key={specialist.unique_id}
                    size={{
                      xs: 12,
                      md: 6
                    }}>
                    <Card
                      sx={{
                        height: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `url(${specialist.image_url}) center/cover`,
                          opacity: 0.1,
                          zIndex: 0,
                        },
                      }}
                    >
                      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h4" gutterBottom>
                          {specialist.name}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOnIcon sx={{ color: '#C9A96E', mr: 1 }} />
                          <Typography variant="body2">
                            {specialist.address.city}, {specialist.address.state}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Rating
                            value={specialist.rating}
                            readOnly
                            precision={0.1}
                            size="small"
                          />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            ({specialist.review_count} reviews)
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Button
                            variant="contained"
                            size="small"
                            href={`/specialist/${specialist.unique_id}/${createSlug(specialist.name)}`}
                            sx={{ flex: 1, minWidth: 120 }}
                          >
                            View Details
                          </Button>
                          
                          <Button
                            variant="outlined"
                            size="small"
                            href={`tel:${specialist.phone}`}
                            startIcon={<PhoneIcon />}
                            sx={{
                              borderColor: '#C9A96E',
                              color: '#C9A96E',
                              '&:hover': {
                                borderColor: '#E6C78A',
                                backgroundColor: 'rgba(201, 169, 110, 0.1)',
                              },
                            }}
                          >
                            Call
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
            
            {searchTerm.length > 1 && searchResults.length === 0 && (
              <Card sx={{ textAlign: 'center', py: 4 }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    No specialists found
                  </Typography>
                  <Typography variant="body1">
                    Try searching with a different city, state, or zip code.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default SearchComponent;
