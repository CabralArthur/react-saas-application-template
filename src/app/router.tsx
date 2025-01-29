import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@features/Login';

import App from '../App';
import Dashboard from '@/features/Dashboard';

export const createRouter = () =>
    createBrowserRouter([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Navigate replace to="/dashboard" />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                // {
                //     element: <RouteProtection />,
                //     children: [
                //         {
                //             path: 'dashboard',
                //             element: <Dashboard />,
                //         }
                //     ],
                // },
                // {
                //     element: <AdminRouteProtection />,
                //     children: [
                //         {
                //             path: 'users',
                //             element: <UsersContainer />,
                //         }
                //     ],
                // }
            ],
        },
    ]
);
