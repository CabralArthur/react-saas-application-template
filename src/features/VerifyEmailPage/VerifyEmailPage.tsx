import { Button } from "@/components/ui/button";
import useVerifyEmailPageContainer from "./VerifyEmailPage.container";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyEmailPage() {
    const { data, isLoading, error } = useVerifyEmailPageContainer();
    const navigate = useNavigate();
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        if (data && !error) {
            const timer = setInterval(() => {
                setCounter(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        navigate("/login");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [data, error, navigate]);

    if (isLoading) return (
        <div className="flex min-h-screen flex-1 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8 rounded-lg border shadow-sm">
        <div className="text-center space-y-4">
          {error || !data ? (
            <XCircle className="h-12 w-12 mx-auto text-destructive" />
          ) : (
            <CheckCircle className="h-12 w-12 mx-auto text-primary" />
          )}
          <h2 className="text-3xl font-extrabold">{
                (error || !data) ? "Something went wrong" : "Your email has been verified"
            }</h2>
          <p className="text-sm text-muted-foreground">
            {
                (error || !data) ? "Your verification token is invalid or expired" : "You can now login to your account"
            }
          </p>
          {data && !error && (
            <p className="text-sm text-muted-foreground">
              Redirecting to login page in {counter} seconds...
            </p>
          )}
        </div>
        <Button 
          className="w-full text-base font-medium" 
          size="lg"
          onClick={() => navigate("/login")}
        >
          {
            (error || !data) ? "Try again" : "Login"
          }
        </Button>
      </div>
    </div>
  );
}
