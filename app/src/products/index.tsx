import { Box, Button, Typography } from "@mui/material";
import { ProductTable } from "./components/ProductsTable";
import { useState } from "react";
import { emptyProduct, ModalProducts, Product } from "./components/ProductForm/ModalProducts";

export const Products = () => {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState<string | undefined>(undefined);
  const [product, setProduct] = useState<Product>(emptyProduct);

  return (
    <Box
      sx={{
        width: "device-width",
        height: "93vh",
        padding: {xs: '1rem', md: '4rem' , lg: '6rem'}
      }}
    >
      <Typography sx={{fontWeight: '700'}} variant="h2">Productos</Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }} >
        <Button sx={{minWidth: '110px'}} variant='contained' onClick={() => setOpen(true)} >Nuevo</Button>
      </Box>
      <ProductTable
        setProductId={setProductId}
        setProduct={setProduct}
        setOpen={setOpen}
      />
      <ModalProducts
        initialValues={product}
        productId={productId}
        open={open}
        setProductId={setProductId}
        setProduct={setProduct}
        setOpen={setOpen}
      />
    </Box>
  )

}

