import { verifyEmail } from "@/processes/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function VerifyEmailPageContainer() {
    const { token } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["verify-email", token],
        queryFn: () => token ? verifyEmail(token) : null,
        enabled: !!token
    }); 

    if (!token) {
        navigate("/login");
        return { data: null, isLoading: false, error: null };
    }

    return {
        data,
        isLoading,
        error,
    };
}