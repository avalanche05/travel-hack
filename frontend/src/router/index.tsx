import { createBrowserRouter } from 'react-router-dom';
import UnauthorizedOnlyRoute from './UnauthorizedOnlyRoute';
import AuthService from '../api/AuthService';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import PlacesDetails from '../pages/PlacesDetails';
import PlacesList from '../pages/PlacesList';
import Order from '../pages/Order';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: '/signup',
        element: (
            <UnauthorizedOnlyRoute isSignedIn={AuthService.isAuthorized()}>
                <SignUp />
            </UnauthorizedOnlyRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <UnauthorizedOnlyRoute isSignedIn={AuthService.isAuthorized()}>
                <Login />
            </UnauthorizedOnlyRoute>
        ),
    },
    {
        path: '/places-details/:placeId',
        element: <PlacesDetails />,
    },
    {
        path: '/orders/:eventId',
        element: <Order />,
    },
    {
        path: '/places-list',
        element: <PlacesList />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '*',
        element: <PlacesList />,
    },
]);
