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
import { useListProducts } from "../../hooks/uselistProducts";
import { ModalDiscardChanges } from "@/src/shared/components/ModalDiscardChanges";

export const ModalProducts = (props: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const productId = props.productId ? props.productId : uuid();
  const [unitPVP, setUnitPVP] = useState<number>(0);
  const [price, setPrice] = useState<Object | null>(null);

  const { refetch } = useListProducts({offset: 0, limit: 100 });
  const { mutate: submitPrice } = useSubmitPrice(() => handleClose());
  const { mutate: submit, isPending } = useSubmitProduct({
    onSuccess: () => submitPrice(price)
  });

  const handleSubmit = (values: Product) => {
    setPrice({
      id: productId,
      productId: productId,
      isActive: true,
      ...parseValues(values),
    });
    submit({
      id: productId,
      isActive: true,
      pvp: calculateUnitValue(parseValues(values)).unitPVP,
      name: values.name,
      unity: values.unity?.id || "",
    })
  };

  const handleClose = () => {
    refetch();
    setUnitPVP(0);
    props.setProduct(emptyProduct);
    props.setProductId(undefined);
    props.setOpen(false);
    setOpen(false);
  };

  return (
    <ModalForm
      isOpen={props.open}
      onClose={() => setOpen(true)}
      title="Productos"
    >
      <Formik
        initialValues={props.initialValues}
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values, errors }) => (
          <>
            <ProductsForm />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right'
              }}
            >
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
      <ModalDiscardChanges
        open={open}
        onClose={setOpen}
        onAcept={handleClose}
      />
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

export const emptyProduct = {
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

export interface Product extends ProductValues {
  name: string,
  unity: {
    id: string,
    name: string,
    symbol: string,
  } | undefined,
}

interface ModalProps {
  productId: string | undefined;
  open: boolean;
  initialValues: Product,
  setProductId: (productId: string | undefined) => void,
  setProduct: (product: Product) => void,
  setOpen: (open: boolean) => void;
}

