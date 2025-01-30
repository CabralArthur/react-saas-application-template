import { Loader2 } from 'lucide-react';
import { getUserInfo } from '@/processes/user';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

import useIsLogged from '@/hooks/useIsLogged';

export default function PublicRouteGuard() {
    const { data: userInfo, isLoading } = useQuery({
        queryKey: ['userInfo'],
        queryFn: getUserInfo,
        retry: false,
        staleTime: Infinity
    })

    const isLogged = useIsLogged()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="w-4 h-4 animate-spin" />
            </div>
        )
    }

    if (userInfo || isLogged) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}
