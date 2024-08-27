import { Box, Button, Typography } from "@mui/material";
import { ProductTable } from "./components/ProductsTable";
import { useState } from "react";
import { ModalProducts } from "./components/ProductForm/ModalProducts";

export const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h1">Productos</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }} >
        <Button variant='contained' onClick={() => setOpen(true)} >Nuevo</Button>
      </Box>
      <ProductTable />
      <ModalProducts open={open} setOpen={setOpen}  />
    </Box>
  )

}
