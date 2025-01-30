import { Outlet } from "react-router-dom";
import { useUserStore } from "./stores/user.store";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./processes/user";
import { Loader } from "lucide-react";

function App() {
  const { setUserInfo } = useUserStore();

  const { isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const userInfo = await getUserInfo();

      if (userInfo) {
        setUserInfo(userInfo);
      }

      return userInfo;
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader className="h-8 w-8 animate-spin" />
          <span className="text-sm text-muted-foreground">Loading your information...</span>
        </div>
      </div>
    );
  }

  return <Outlet />;
}

export default App;
