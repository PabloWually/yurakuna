import React, { FC } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./style";
import { IconButton } from "@mui/material";

export const ModalForm: FC<ModalEventProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      // TODO: buscar una mejor forma para que no se sobrelapen
    >
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h4" sx={styles.title}>
            {title}
          </Typography>
          <Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};

interface ModalEventProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
