import { FC, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

export const AutocompleteSelect: FC<AutoCompleteSelectProps> = ({
  label,
  helperText,
  value = null,
  error,
  ...props }) => {
  return (
    <Input
      value={value}
      {...props}
      renderInput={(params) => (
        <FormControl variant="standard" fullWidth={props.fullWidth}>
          <TextField
            {...params}
            placeholder="Empieza a escribir para acceder rápidamente..."
            label={label}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              fontWeight: 500,
              ".MuiAutocomplete-endAdornment": {
                backgroundColor: "rgba(208, 208, 208, 0.26)",
                borderRadius: "20px"
              }
            }}
            error={error}
          />
          <FormHelperText id={props.id} error={error}>
            {helperText}
          </FormHelperText>
        </FormControl>
      )}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
}

const getOptionLabel = (option: OptionType) => option.name || "";
const isOptionEqualToValue = (option: OptionType, value: OptionType) =>
  option?.id === value?.id;

export interface OptionType {
  id: string;
  name: string;
  value?: any;
  titleGroupBy?: string;
}

interface ExtraProps {
  id: string;
  label: string;
  helperText?: string;
  error?: boolean;
}

export type AutoCompleteSelectProps = Omit<
  AutocompleteProps<OptionType, boolean, boolean, false>,
  "renderInput" | "getOptionLabel" | "isOptionEqualToValue"
> &
  ExtraProps;

export const Input = styled(Autocomplete<OptionType, boolean, boolean, false>)(
  ({ theme }) => ({
    legend: {
      display: "none",
    },
    "& .MuiFormLabel-root": {
      fontSize: ".8rem",
      transform: "translate(0px, -1.5px)",
    },
    "& .MuiInputBase-root": {
      marginTop: theme.spacing(3),
    },
    "& .MuiAutocomplete-input": {
      height: "2rem",
      padding: "6px 5px 10px 5px !important",
    },
    label: {
      textTransform: "uppercase",
      transform: "translate(0, -1.5px)",
      fontSize: ".8rem",
      fontFamily: "Poppins,'DM Sans','Roboto',sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "15px",
      color: "#717579",

    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "15px",
      padding: "16px 20px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
    "& .MuiOutlinedInput-root": {
      padding: "0px 9px",
    },
  })
);
