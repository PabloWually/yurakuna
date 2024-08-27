import { FC } from "react";
import { useField } from "formik";
import {
  AutocompleteSelect,
  AutoCompleteSelectProps,
  OptionType as _OptionType,
} from "./StyledComponents/AutocompleteSelect";

export const FormSelectField: FC<SelectFieldProps> = (props) => {
  const [field, meta, helper] = useField(props.id);

  const handleChange = (_e: any, value: OptionType | OptionType[] | null) => {
    helper.setValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <AutocompleteSelect
      {...props}
      value={field.value}
      helperText={meta.error}
      error={!!meta.error}
      onChange={handleChange}
    />
  );
};

export interface SelectFieldProps
  extends Omit<AutoCompleteSelectProps, "onChange" | "value" | "helperText"> {
  onChange?: (value: OptionType | OptionType[] | null) => void;
}

export type OptionType = _OptionType;

