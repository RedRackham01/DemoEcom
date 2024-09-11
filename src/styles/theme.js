import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Outline color
            },
            '&:hover fieldset': {
              borderColor: 'white', // Outline color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Outline color when focused
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white', // Label color
          },
          '& .MuiInputBase-input': {
            color: 'white', // Text color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Outline color
            },
            '&:hover fieldset': {
              borderColor: 'white', // Outline color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Outline color when focused
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white', // Label color
          },
          '& .MuiInputBase-input': {
            color: 'white', // Text color
          },
          '& .MuiSvgIcon-root': {
            color: 'white', // Arrow color
          },
        },
      },
    },
  },
});

export default theme;
