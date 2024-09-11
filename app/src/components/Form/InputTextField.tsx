import { ChangeEvent, FC } from "react";
import { InputText, InputTextProps } from "./StyledComponents/InputText";
import { useField } from "formik";

export const InputTextField: FC<InputTextFieldProps> = (props) => {
  const [field, meta, helper] = useField(props.id);
  
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    helper.setValue(e.target.value);
  };

  return (
    <InputText
      {...props}
      value={field.value}
      helperText={meta.error}
      onChange={handleChange}
    />
  );
};

interface InputTextFieldProps
  extends Omit<InputTextProps, "onChange" | "value" | "helperText"> {}
