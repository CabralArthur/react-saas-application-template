import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";

import { signup } from "@/processes/auth";
import { signupSchema } from "@/schemas/auth";

type SignupFormData = yup.InferType<typeof signupSchema>;

export default function SignupContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<
    SignupFormData
  >({
    resolver: yupResolver(signupSchema)
  });

  const { mutate: signupFn, isPending } = useMutation({
    mutationFn: async (credentials: SignupFormData) => {
      await signup(credentials)
    },
    onSuccess: () => {
      toast.success("Account created successfully!");
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create account");
    }
  });

  const onSubmit = (data: SignupFormData) => signupFn(data);

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    onSubmit,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword
  }
}