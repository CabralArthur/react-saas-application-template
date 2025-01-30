import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useRequestPasswordResetPageContainer from "./RequestPasswordResetPage.container";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import signupPaisageSource from "@/assets/img/signup-paisage.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
export default function RequestPasswordReset() {
    const { register, handleSubmit, onSubmit, isLoading } = useRequestPasswordResetPageContainer();

  return (
    <div className="flex min-h-screen flex-1">
        <div className="relative hidden w-0 flex-1 lg:block">
            <img
            alt="Login background"
            src={signupPaisageSource}
            className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 lg:flex-none sm:px-6 lg:px-8">
        <Card className="md:min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-semibold">Forgot your password?</CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                    Enter your email to reset your password
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required {...register("email")} />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
                <div className="text-center">
                    <Button variant="link" asChild>
                        <Link to="/login">
                            <ArrowLeftIcon className="w-4 h-4 mr-2" />
                            Back to Sign in
                        </Link>
                    </Button>
                </div>
                </form>
            </CardContent>
        </Card>
        </div>
    </div>
  );
}
