import { number, object, string } from "yup";

export const schema = object().shape({
  name: string().required("Campo requerido"),
  unity: object().required("Seleccione una opción"),
  productPurchased: number().required("Campo requerido").min(0, "Valor no válido"),
  productWaste: number().required("Campo requerido").min(0, "Valor no válido"),
  purchaseAmout: number().required("Campo requerido").min(0, "Valor no válido"),
  transportation: number().required("CampoRequerido").min(0, "Valor no válido"),
  utility: number().required("CampoRequerido").min(0, "Valor no válido").max(100, "Valor no válido"),
  misellanious: number().required("CampoRequerido").min(0, "Valor no válido"),
  mod: number().required("CampoRequerido").min(0, "Valor no válido"),
})
