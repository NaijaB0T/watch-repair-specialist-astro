import { createTheme } from '@mui/material/styles';

const watchmakerTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A96E', // Brass/Bronze
      light: '#E6C78A',
      dark: '#8B7355',
      contrastText: '#1A1A1A',
    },
    secondary: {
      main: '#95A5A6', // Steel Grey
      light: '#BDC3C7',
      dark: '#5D6D7E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1A1A', // Deep charcoal
      paper: '#2C2C2C', // Slightly lighter for cards
    },
    text: {
      primary: '#E8E8E8', // Warm white
      secondary: '#C9A96E', // Brass for accents
    },
    error: {
      main: '#E74C3C',
    },
    warning: {
      main: '#F39C12',
    },
    info: {
      main: '#3498DB',
    },
    success: {
      main: '#27AE60',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#E8E8E8', // Changed from #C9A96E for better contrast
      textShadow: '2px 2px 4px rgba(255,255,255,0.2)', // Lighter shadow for better contrast
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      color: '#E8E8E8', // Changed from #C9A96E for better contrast
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#E8E8E8',
    },
    h4: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#E8E8E8',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#E8E8E8',
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#B8B8B8',
    },
    button: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #C9A96E 0%, #8B7355 100%)',
          border: '1px solid #95A5A6',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #E6C78A 0%, #C9A96E 100%)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C2C2C',
          border: '1px solid #95A5A6',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          transition: 'all 0.3s ease',
          backgroundImage: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.5), 0 0 20px rgba(201, 169, 110, 0.2)',
            border: '1px solid #C9A96E',
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        icon: {
          color: '#C9A96E',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        },
        iconEmpty: {
          color: '#5D6D7E',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#2C2C2C',
            border: '2px solid #95A5A6',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              border: '2px solid #C9A96E',
            },
            '&.Mui-focused': {
              border: '2px solid #C9A96E',
              boxShadow: '0 0 20px rgba(201, 169, 110, 0.3)',
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #C9A96E 0%, #8B7355 100%)',
          border: '2px solid #95A5A6',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          '&:hover': {
            background: 'linear-gradient(135deg, #E6C78A 0%, #C9A96E 100%)',
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
});

export default watchmakerTheme;
