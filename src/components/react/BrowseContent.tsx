import React from 'react';
import { 
  Container, 
  Card, 
  CardContent,
  Grid,
  Rating,
  Button,
  Typography,
  Box
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import CustomBreadcrumbs from './CustomBreadcrumbs';

interface Specialist {
  unique_id: string;
  source_url: string;
  name: string;
  website: string;
  phone: string;
  rating: number;
  review_count: number;
  image_url: string;
  address?: {
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  google_maps_url: string;
  nearby_specialists_ids: string[];
}

interface BrowseContentProps {
  specialistsByState: Record<string, Specialist[]>;
}

const BrowseContent: React.FC<BrowseContentProps> = ({ specialistsByState }) => {
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
      <CustomBreadcrumbs />
      <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 4 }}>
        Browse All Watch Repair Specialists
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Explore our comprehensive directory of master horologists and certified watch repair specialists 
        across the United States. Select your state below to find expert timepiece restoration services in your area.
      </Typography>
      {Object.entries(specialistsByState)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([state, stateSpecialists]) => (
          <Box key={state} sx={{ mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 3 }}>
              {state}
            </Typography>
            
            <Grid container spacing={3}>
              {stateSpecialists.map((specialist) => (
                <Grid
                  key={specialist.unique_id}
                  size={{
                    xs: 12,
                    md: 6
                  }}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h3" component="h3" gutterBottom>
                        {specialist.name}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating value={specialist.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                          ({specialist.review_count} reviews)
                        </Typography>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {specialist.address && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocationOnIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              <Typography variant="body2">
                                {(() => {
                                  if (!specialist.address) {
                                    return 'Location not specified';
                                  }
                                  const city = specialist.address.city;
                                  const state = specialist.address.state;
                                  if (city && state) {
                                    return `${city}, ${state}`;
                                  } else if (city) {
                                    return city;
                                  } else if (state) {
                                    return state;
                                  }
                                  return 'Location not specified';
                                })()}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        
                          {specialist.phone && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <PhoneIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              <Typography variant="body2">
                                {specialist.phone}
                              </Typography>
                            </Box>
                          )}

                          {specialist.website && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LanguageIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              <Typography variant="body2">
                                {specialist.website}
                              </Typography>
                            </Box>
                          )}
                      </Box>

                      <Button 
                        variant="outlined" 
                        color="primary" 
                        href={`/specialist/${specialist.unique_id}/${createSlug(specialist.name)}`}
                        fullWidth
                      >
                        View Full Profile
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
    </Container>
  );
};

export default BrowseContent;
