import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "@/app/api";

const resetPasswordSchema = z.object({
    email: z.string().email("Invalid email address").nonempty()
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function RequestPasswordResetPageContainer() {
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
            await api.post("/auth/request-reset-password", data);
            toast.success("Reset password request sent");
        } catch (error) {
            toast.error((error as Error).message || "Reset password request failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { register, handleSubmit, errors, onSubmit, isLoading };
}