import { ModalForm } from "@/src/shared/components/ModalForm";
import { Formik } from "formik";
import { ProductsForm } from "./Form";
import { schema } from "../../lib/schema";

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
        validationSchema={schema}
        onSubmit={(values) => console.log(values) }
      >
        {({ values, errors }) => (
          <ProductsForm />
        )}
      </Formik>
    </ModalForm>
  )
}

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

