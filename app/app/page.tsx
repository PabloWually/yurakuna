import React from 'react';
import Box from '@mui/material/Box';
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
