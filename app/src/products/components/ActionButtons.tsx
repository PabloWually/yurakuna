import { Product } from "./ProductForm/ModalProducts"
import { Box, Button } from "@mui/material";

export const ActionButtons = ({
  productId,
  product,
  handleEdit,
  handleModalDelete
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Button
        variant='contained'
        sx={{ width: '110px' }}
        onClick={() => handleEdit(productId, product)}
      >
        Editar
      </Button>
      <Button
        variant='contained'
        sx={{ width: '110px' }}
        onClick={() => handleModalDelete(productId)}
      >
        Eliminar
      </Button>
    </Box>
  )
}

interface Props {
  productId: string,
  product: Product,
  handleEdit: (productId: string, product: Product) => void,
  handleModalDelete: (value: string) => void,
}
