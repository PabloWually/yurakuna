import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./style";
import { IconButton } from "@mui/material";
import { StyledModal } from "@/src/components/Modal";

export const ModalForm: FC<ModalEventProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
    >
      <Box>
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
    </StyledModal>
  );
};

interface ModalEventProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
