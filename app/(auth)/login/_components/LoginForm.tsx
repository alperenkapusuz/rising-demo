'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
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
} from '@mui/material';
import CustomInput from '@/lib/components/atoms/CustomInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomButton from '@/lib/components/atoms/CustomButton';
import { useLoginForm } from './useLoginForm';

const LoginForm = () => {
  const { form, showPassword, handleMouseDownPassword, handleClickShowPassword, handleRememberMeStatus, onSubmit } =
    useLoginForm();

  return (
    <Box>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
              sx={{ mb: 2 }}
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Şifre"
                size="small"
                margin="none"
                fullWidth
                error={!!form.formState.errors.password}
                sx={{ mb: 2 }}
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
                <FormHelperText sx={{ mt: '-15px', ml: '15px' }} error>
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
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mt: 2 }}>
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
