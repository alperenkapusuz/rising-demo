"use client";
import React, { useState } from "react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { postLoginFn } from "@/lib/api/authQueryFns";
import { setToken } from "@/lib/utils/token-action";
import { toastError, toastSuccess } from "@/lib/utils/toast-message";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CustomInput from "@/lib/components/atoms/CustomInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomButton from "@/lib/components/atoms/CustomButton";

export const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Bu alanın doldurulması zorunludur." }),
  password: z
    .string()
    .min(1, { message: "Bu alanın doldurulması zorunludur." }),
});

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMeStatus, setRememberMeStatus] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleRememberMeStatus = () => {
    setRememberMeStatus((status) => !status);
  };

  const { mutate: login } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      console.log(data);
      if (!data?.jwt) return;
      setToken(data?.jwt, rememberMeStatus);
      toastSuccess("Login Success");
      form.reset();
      router.push("/");
    },
    onError: (error: any) => {
      toastError("Login Failed");
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    login(data);
  }

  return (
    <Box>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        style={{ display: "flex", gap: 20, flexDirection: "column" }}
      >
        <Controller
          name="username"
          control={form.control}
          render={({ field: { ref, ...field } }) => (
            <CustomInput
              {...field}
              inputRef={ref}
              placeholder="Kullanıcı Adı"
              fullWidth
              size="small"
              error={!!form.formState.errors.username}
              helperText={form.formState.errors.username?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field: { ref, ...field } }) => (
            <>
              <OutlinedInput
                {...field}
                inputRef={ref}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Şifre"
                size="small"
                margin="none"
                error={!!form.formState.errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {form.formState.errors.password && (
                <FormHelperText sx={{ mt: "-15px", ml: "15px" }} error>
                  {form.formState.errors.password.message}
                </FormHelperText>
              )}
            </>
          )}
        />
        <CustomButton type="submit" variant="contained" fullWidth>
          Login
        </CustomButton>
      </form>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1}
      >
        <FormGroup>
          <FormControlLabel
            onClick={handleRememberMeStatus}
            control={<Checkbox value="remember" color="primary" size="small" />}
            label="Remember Me"
          />
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default LoginForm;
