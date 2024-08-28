import { InputTextField } from "@/src/components/Form/InputTextField"
import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material"
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
            id='productAvailable'
            label='Producto Disponible (unidad)'
            type='number'
            fullWidth
          />
          <InputTextField
            id='productWaste'
            label='Desperdicio (unidad)'
            type='number'
            fullWidth
          />
          <InputTextField
            id='transportation'
            label='Transporte ($)'
            type='number'
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <InputTextField
            id='utility'
            label='Utilidad (%)'
            type='number'
            fullWidth
          />
          <InputTextField
            id='misellanious'
            label='Varios ($)'
            type='number'
            fullWidth
          />
          <InputTextField
            id='mod'
            label='MOD ($)'
            type='number'
            fullWidth
          />
        </Grid>
      </Grid>
      <Button variant="contained" type="submit">Guardar</Button>
    </Form>
  )
} 
