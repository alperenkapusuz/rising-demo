"use client";
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLOR } from "@/lib/constants/color";

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInput-underline:after': {},
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLOR.border_secondary,
    },
    '&:hover fieldset': {
      borderColor: COLOR.border_secondary,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLOR.primary,
    },
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
  },
  backgroundColor: COLOR.secondary,
  borderRadius: 6,
}));

const CustomInput = (props: TextFieldProps) => {
  return <StyledTextField {...props}/>;
};

export default CustomInput;