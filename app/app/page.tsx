import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Box sx={{
      width: "100%",
      height: "100vh",
    }}
    >
      <Box sx={{
        marginTop: "300px"
      }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", fontWeight: "500" }} >En construcci&oacute;n</Typography>
        <Typography variant="h6" sx={{ textAlign: "center",fontWeight: "300" }} >Estamos trabajando duro para traerte algo incre&iacute;ble.</Typography>
        <Typography variant="h6" sx={{ textAlign: "center",fontWeight: "300" }} >Vuelva a visitarnos pronto.</Typography>
      </Box>
    </Box>
  );
}

export default App;
