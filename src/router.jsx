import {createBrowserRouter} from 'react-router-dom';
import Login from './assets/views/Login.jsx'
import NotFound from './assets/views/NotFound';
import Dashboard from './assets/views/Dashboard.jsx';
import Users from './assets/views/Users.jsx';
import Guest from './assets/views/Guest.jsx';

const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <Dashboard />,
            children: [
                {
                    path: '/users',
                    element: <Users />

                }
            ]
        },
        {
            path: '/',
            element: <Guest />,
            children: [
                {
                    path: '/login',
                    element: <Login />

                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },

    ]
)

export default router;