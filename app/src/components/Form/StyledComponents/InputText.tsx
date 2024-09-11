import { FC, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  InputProps,
} from "@mui/material";

export const InputText: FC<InputTextProps> = forwardRef<
  HTMLInputElement,
  InputTextProps
>(({ id, label, helperText, fullWidth, ...props }, ref) => (
  <FormControl variant="standard" fullWidth={fullWidth}>
    <InputLabel
      shrink
      htmlFor={id}
      sx={{
        textTransform: "uppercase",
        transform: "translate(0, -1.5px)",
        fontSize: ".8rem",
        fontFamily: "Poppins,'DM Sans','Roboto',sans-serif",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "15px",
        color: "#717579",
      }}
    >
      {label}
    </InputLabel>
    <Input ref={ref} id={id} aria-describedby={helperText} {...props} />
    <FormHelperText id={id} error>
      {helperText}
    </FormHelperText>
  </FormControl>
));

InputText.displayName = "InputText";

export interface InputTextProps extends Omit<InputProps, "inputRef" | "ref"> {
  id: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.25),
  },

  "& .MuiInputBase-input": {
    borderRadius: "14px",
    border: "1px solid #D7D7D7",
    padding: "10px 20px",
    fontWeight: 500,

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:hover": {
      border: "1px solid #51B3AB",
    },
    "&:focus": {
      outline: "1px solid #51B3AB",
    },
  },
}));
