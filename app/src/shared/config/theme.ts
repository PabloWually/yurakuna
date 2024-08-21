import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: '#FFFFFF',
      paper: '#F0F0F0',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#6C757D',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#DC3545',
    },
    info: {
      main: '#17A2B8',
    },
  }
});
