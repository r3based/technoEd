import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/registration/register';
import Login from './pages/auth/login/login';
import Main from './pages/main/main';
import Forgot from './pages/auth/forgotPassword/forgotPassword';
import Reset from './pages/auth/resetPassword/resetPassword';
import Layout from './pages/layout/layout';
import RequireAuth from './pages/auth/reqr/requireAuth';

const App = () => {
    return (
        <Router>
            <Layout>
                <div className="min-h-screen w-full flex items-center content-center bg-gray-100">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot" element={<Forgot />} />
                        <Route path="/reset" element={<Reset />} />

                        {/* Protected Routes */}
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <Main />
                                </RequireAuth>
                            }
                        />
                        {/* Add more protected routes here as needed */}
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
};

export default App;
