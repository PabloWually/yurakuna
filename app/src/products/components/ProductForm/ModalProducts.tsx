import { ModalForm } from "@/src/shared/components/ModalForm";
import { Formik } from "formik";
import { ProductsForm } from "./Form";
import { schema } from "../../lib/schema";

export const ModalProducts = (props: ModalProps) => {
  const initialValues = {
    name: "",
    unity: {},
    productPurchased: 0,
    purchaseAmount: 0,
    productWaste: 0,
    transportation: 0,
    utility: 0,
    misellanious: 0,
    mod: 0,
  }
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
        initialValues={initialValues}
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

