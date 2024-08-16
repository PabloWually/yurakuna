import { Box, Typography } from "@mui/material";
import { listProducts } from "./hooks/listProducts";

export const Products = () => {
  const products = listProducts({offset: 0, limit: 100})
  return (
    <Box>
      <Typography variant="h1">Productos</Typography>
    </Box>
  )

}
