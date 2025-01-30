import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import Home from '@features/Home';
import Login from '@features/Login';
import Signup from '@features/Signup';
import ResetPassword from '@features/ResetPassword';
import RequestPasswordReset from '@features/RequestPasswordReset';

import PublicRouteGuard from '@/guards/Public';
import PrivateRouteGuard from '@/guards/Private';

export const createRouter = () =>
    createBrowserRouter([
        {
            element: <PublicRouteGuard />,
            children: [
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/signup',
                    element: <Signup />,
                },
                {
                    path: '/reset-password',
                    element: <ResetPassword />,
                },
                {
                    path: '/request-password-reset',
                    element: <RequestPasswordReset />,
                }
            ]
        },
        {
            path: '/',
            element: <PrivateRouteGuard />,
            children: [
                {
                    element: <App />,
                    children: [
                        {
                            path: "/home",
                            element: <Home />,
                        }
                    ],
                }
            ],
        },
    ]
);
