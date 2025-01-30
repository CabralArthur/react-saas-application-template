import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
});

export const signupSchema = yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required()
});

export const resetPasswordSchema = yup.object({
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required()
});

export const requestPasswordResetSchema = yup.object({
    email: yup.string().email().required()
});