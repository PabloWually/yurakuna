import { InputTextField } from "@/src/components/Form/InputTextField"
import { Box, Divider, Grid, TextField, Typography } from "@mui/material"
import { UnitySelectField } from "./UnitySelectField"
import { Form } from "formik"

export const ProductsForm = () => {
  return (
    <Form>
      <InputTextField
        id='name'
        label='Nombre del producto'
        fullWidth
      />
      <UnitySelectField
        id='unity'
        label='Unidad'
        fullWidth
      />
      <Box paddingY={"15px"}>
        <Divider />
        <Typography variant='h6' >Precio</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputTextField
            id='productAvailability'
            label='Producto Disponible (unidad)'
            fullWidth
          />
          <InputTextField
            id='productWaste'
            label='Desperdicio (unidad)'
            fullWidth
          />
          <InputTextField
            id='transportation'
            label='Transporte ($)'
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputTextField
            id='utility'
            label='Utilidad (%)'
            fullWidth
          />
          <InputTextField
            id='misellanious'
            label='Varios ($)'
            fullWidth
          />
          <InputTextField
            id='mod'
            label='MOD ($)'
            fullWidth
          />
        </Grid>
      </Grid>
    </Form>
  )
} 
