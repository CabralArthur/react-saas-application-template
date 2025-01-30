import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import Home from '@features/Home';
import Login from '@features/Login';
import Signup from '@features/Signup';

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
                }
            ]
        },
        {
            path: '/',
            element: <App />,
            children: [
                {
                    element: <PrivateRouteGuard />,
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
