"use client";
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(() => ({
  borderRadius: 6,
}));

const CustomInput = (props: TextFieldProps) => {
  return <StyledTextField {...props}/>;
};

export default CustomInput;