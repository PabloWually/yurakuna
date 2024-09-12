import { FormSelectField, SelectFieldProps } from "@/src/components/Form/FormSelectField";
import { measurementUnist } from "@/src/shared/libs/measurementUnits";
import { useField } from "formik";
import { FC } from "react";

export const UnitySelectField: FC<UnitySelectFieldProps> = ({
  id,
  ...props
}) => {
  const [, , helper] = useField(id);
  const cleanUnits = () => {
    helper.setValue(null, false);
  }

  return (
    <FormSelectField
      id={id}
      options={measurementUnist.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)}
      {...props}
    />
  )
}

interface UnitySelectFieldProps extends Omit<SelectFieldProps, "options"> {
  id: string;
}
