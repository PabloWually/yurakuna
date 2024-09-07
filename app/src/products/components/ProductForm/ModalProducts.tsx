import { ModalForm } from "@/src/shared/components/ModalForm";
import { Formik } from "formik";
import { ProductsForm } from "./Form";
import { schema } from "../../lib/schema";
import { Button, Box, Typography } from "@mui/material";
import { calculateUnitValue, ProductValues } from "../../utils/calculateUnitValue";
import { useState } from "react";

export const ModalProducts = (props: ModalProps) => {
  const [unitPVP, setUnitPVP] = useState<number>(0);
  const initialValues = {
    name: "",
    unity: null,
    productPurchased: 0,
    purchaseAmount: 0,
    productWaste: 0,
    transportation: 0,
    profit: 0,
    misellanious: 0,
    mod: 0,
  }
  const handleClose = () => {
    setUnitPVP(0)
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
        onSubmit={(values) => console.log(parseValues(values))}
      >
        {({ values, errors }) => (
          <>
            <ProductsForm />
            <Box display="flex" >
              <Button
                onClick={() => {
                  setUnitPVP(calculateUnitValue(parseValues(values)).unitPVP);
                }}
              >Calcular PVP unitario</Button>
              <Typography sx={{color: 'primary', alignSelf: 'center'}}>{`$ ${unitPVP}`}</Typography>
            </Box>
          </>
        )}
      </Formik>
    </ModalForm>
  )
}

const parseValues = (values: ProductValues): ProductValues => {
  return {
    productPurchased: +values.productPurchased,
    purchaseAmount: +values.purchaseAmount,
    productWaste: +values.productWaste,
    transportation: +values.transportation,
    profit: +values.profit / 100,
    misellanious: +values.misellanious,
    mod: +values.mod,
  }
}

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

