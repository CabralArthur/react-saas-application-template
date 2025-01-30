import { useParams } from "react-router-dom";

import api from "@/app/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const resetPasswordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters")
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPageContainer() {
    const navigate = useNavigate();
    const { token } = useParams();
    
    const [isLoading, setIsLoading] = useState(false);
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema)
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        try {
            setIsLoading(true);
            await api.post("/auth/reset-password", { ...data, token });
            toast.success("Your password has been reset. Login to continue.");
            navigate("/login");
        } catch (error) {
            toast.error((error as Error).message || "Reset password request failed");
        } finally {
            setIsLoading(false);
        }
    };

    const validateToken = async () => {
        if (!token) {
            toast.error("Invalid or expired reset token");
            navigate("/login");
            return false;
        }

        try {
            await api.get("/auth/validate-reset-password", { params: { token } });
            return true;
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Invalid or expired reset token");
            }

            navigate("/login");
            return false;
        }
    };

    return { validateToken, register, handleSubmit, errors, onSubmit, isLoading };
}
