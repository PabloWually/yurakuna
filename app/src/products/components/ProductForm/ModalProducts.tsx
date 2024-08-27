import { ModalForm } from "@/src/shared/components/ModalForm";
import { Typography } from "@mui/material"
import { Formik } from "formik";
import { ProductsForm } from "./Form";

export const ModalProducts = (props: ModalProps) => {
  const handleClose = () => {
    props.setOpen(false);
  }
  return (
    <ModalForm
      isOpen={props.open}
      onClose={handleClose}
      title="Productos"
    >
      <Formik
        initialValues={{}}
        onSubmit={()=>{}}
      >
        <ProductsForm />
      </Formik>
    </ModalForm>
  )
}

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

