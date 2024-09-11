import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#b0b0ae", // Outline color
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", // Outline color on hover
            },
          },
          "& .MuiInputLabel-root": {
            color: "white", // Label color
          },
          "& .MuiInputBase-input": {
            color: "white", // Text color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#b0b0ae",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
          },
          "& .MuiInputBase-input": {
            color: "white", // Text color
          },
          ".MuiSvgIcon-root ": {
            fill: "#b0b0ae !important",
          },
        },
      },
    },
  },
});

export default theme;
