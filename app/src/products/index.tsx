import { Box, Button, Typography } from "@mui/material";
import { ProductTable } from "./components/ProductsTable";
import { useState } from "react";

export const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h1">Productos</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }} >
        <Button variant='contained' onClick={() => setOpen(true)} >Nuevo</Button>
      </Box>
      <ProductTable />
    </Box>
  )

}
