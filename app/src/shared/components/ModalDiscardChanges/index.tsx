import { StyledModal } from "@/src/components/Modal"
import { Box, Button, Divider, Typography } from "@mui/material"

export const ModalDiscardChanges = ({
  open,
  onClose,
  onAcept,
}: ModalProps) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
    >
      <Box>
        <Box>
          <Typography variant="h6" align="center" >Confimación</Typography>
        </Box>
        <Divider variant="fullWidth" />
        <Box padding="15px">
          <Typography align="center">
            ¿Desea salir sin guardar los cambios?
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            paddingX: '50px',
            justifyContent: 'space-evenly',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => onAcept()}
          >
            Salir
          </Button>
          <Button
            variant="contained"
            onClick={() => onClose(false)}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </StyledModal>
  );
}

interface ModalProps {
  open: boolean,
  onClose: (value: boolean) => void,
  onAcept: () => void,
}
