import { ModalForm } from "@/src/shared/components/ModalForm";
import { Formik } from "formik";
import { v4 as uuid } from "uuid";
import { ProductsForm } from "./Form";
import { schema } from "../../lib/schema";
import { Button, Box, Typography } from "@mui/material";
import { calculateUnitValue, ProductValues } from "../../utils/calculateUnitValue";
import { useState } from "react";
import { useSubmitProduct } from "../../hooks/useCreateProduct";
import { useSubmitPrice } from "../../hooks/useCreatePrice";

export const ModalProducts = (props: ModalProps) => {
  const [unitPVP, setUnitPVP] = useState<number>(0);
  const [price, setPrice] = useState<Object | null>(null);
  const { mutate: submitPrice } = useSubmitPrice(() => handleClose());
  const { mutate: submit, isPending } = useSubmitProduct({
    onSuccess: () => submitPrice(price)
  });

  const initialValues = {
    name: "",
    unity: undefined,
    productPurchased: 0,
    purchaseAmount: 0,
    productWaste: 0,
    transportation: 0,
    profit: 0,
    misellanious: 0,
    mod: 0,
  }

  const handleSubmit = (values: Product) => {
    console.log('aqui')
    const id = uuid();
    setUnitPVP(calculateUnitValue(parseValues(values)).unitPVP);
    setPrice({
      id: uuid(),
      productId: id,
      isActive: true,
      ...parseValues(values),
    });
    submit({
      id,
      isActive: true,
      pvp: unitPVP,
      name: values.name,
      unity: values.unity?.id || "",
    })
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
        onSubmit={(values) => handleSubmit(values)}
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
              <Typography sx={{ color: 'primary', alignSelf: 'center' }}>{`$ ${unitPVP}`}</Typography>
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

interface Product extends ProductValues {
  name: string,
  unity: {
    id: string,
    name:string,
    symbol: string,
  } | undefined,
}

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

