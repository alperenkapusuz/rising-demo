'use client';
import React, { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { postLoginFn } from '@/lib/api/authQueryFns';
import { setToken } from '@/lib/utils/token-action';
import { toastError, toastSuccess } from '@/lib/utils/toast-message';

//Here I have adopted the separation of concern approach

//Error message handling with Zod library
export const formSchema = z.object({
  username: z.string().min(1, { message: 'This field is mandatory.' }),
  password: z.string().min(1, { message: 'This field is mandatory.' }),
});

export const useLoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMeStatus, setRememberMeStatus] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleRememberMeStatus = () => {
    setRememberMeStatus((status) => !status);
  };

  //Login process request throwing process
  const { mutate: login } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      if (!data?.jwt) {
        toastError(data.message);
        return;
      }
      setToken(data?.jwt, rememberMeStatus);
      toastSuccess('Login Success');
      form.reset();
      router.push('/');
    },
    onError: (error: any) => {
      toastError('Login Failed');
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    login(data);
  }

  return {
    form,
    showPassword,
    handleMouseDownPassword,
    handleClickShowPassword,
    handleRememberMeStatus,
    onSubmit,
  };
};
