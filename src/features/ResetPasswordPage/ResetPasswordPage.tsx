import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import useResetPasswordPageContainer from "./ResetPasswordPage.container";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function ResetPasswordPage() {
    const { validateToken, register, handleSubmit, errors, onSubmit, isLoading } = useResetPasswordPageContainer();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    useEffect(() => {
        validateToken();
    }, [validateToken]);

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Reset your password</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your new password below
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <Label className="mb-1" htmlFor="password">Password</Label>
                <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} required {...register("password")} />
                    <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-0.5 h-8 w-8 px-0"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                    ) : (
                        <EyeIcon className="h-4 w-4" />
                    )}
                    </Button>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
            </div>
            <div className="flex flex-col">
                <Label className="mb-1" htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} required {...register("confirmPassword")} />
                    <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-0.5 h-8 w-8 px-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                    {showConfirmPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                    ) : (
                        <EyeIcon className="h-4 w-4" />
                    )}
                    </Button>
                </div>
            </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}

