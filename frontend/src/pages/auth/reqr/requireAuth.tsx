import { Navigate, useLocation } from 'react-router-dom';

// @ts-ignore
const RequireAuth = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('jwtToken');

    // Define public routes where no authentication is required
    const publicRoutes = ['/register', '/login', '/reset', '/forgot'];

    // Check if the current path is a public route
    const isPublicRoute = publicRoutes.includes(location.pathname);

    // If not a public route and no token, redirect to /register
    if (!isPublicRoute && !token) {
        return <Navigate to="/register" replace />;
    }

    // Otherwise, render the child components
    return children;
};

export default RequireAuth;
