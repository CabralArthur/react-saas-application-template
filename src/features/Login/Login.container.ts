import * as yup from 'yup';
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { login } from "@/processes/auth";
import { loginSchema } from "@/schemas/auth";
import { saveSession } from "@/utils/storage";

type LoginFormData = yup.InferType<typeof loginSchema>;

export default function LoginContainer() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      
      const response = await login(data);

      saveSession({ token: response.token });
      
      toast.success("Login successful!");
      navigate("/websites");
    } catch (error) {
      toast.error((error as Error).message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    errors,
    onSubmit,
    handleSubmit,
    isLoading,
    showPassword,
    setShowPassword
  }
}