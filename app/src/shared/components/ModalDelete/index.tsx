import { StyledModal } from "@/src/components/Modal"
import { Box, Button, Divider, Typography } from "@mui/material"

export const ModalDelete = ({
  message,
  contentId,
  open,
  onClose,
  onConfirm,
}: ModalProps) => {
  const handleConfirm = () => {
    onConfirm(contentId);
    onClose(false);
  }
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
            {message}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            paddingX: {md:'50px'},
            justifyContent: 'space-evenly',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "red",
              borderColor: "red",
              ":hover": {
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.05)",
              }
            }}
            onClick={()=>handleConfirm()}
          >
            Eliminar
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
  message: string,
  contentId: string,
  open: boolean,
  onClose: (value: boolean) => void,
  onConfirm: (value: string) => void,
}
