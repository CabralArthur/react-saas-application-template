import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestResetPassword } from "@/processes/auth";
import { requestPasswordResetSchema } from "@/schemas/auth";

type RequestPasswordResetFormData = yup.InferType<typeof requestPasswordResetSchema>;

export default function RequestPasswordResetPageContainer() {
    const [isLoading, setIsLoading] = useState(false);

    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<RequestPasswordResetFormData>({
        resolver: yupResolver(requestPasswordResetSchema)
    });

    const onSubmit = async (data: RequestPasswordResetFormData) => {
        try {
            setIsLoading(true);

            await requestResetPassword(data.email);

            toast.success("Reset password request sent! Check your email for a link to reset your password.");
        } catch (error) {
            toast.error((error as Error).message || "Reset password request failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { register, handleSubmit, errors, onSubmit, isLoading };
}