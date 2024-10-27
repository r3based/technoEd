import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/registration/register';
import Login from './pages/auth/login/login';
import Main from './pages/main/main';
import Forgot from './pages/auth/forgotPassword/forgotPassword';
import Reset from './pages/auth/resetPassword/resetPassword';
import Layout from './pages/layout/layout';
import RequireAuth from './pages/auth/reqr/requireAuth';
import Course from "./pages/course/course";
import Courses from "./pages/course/cources";
import Soft from './pages/softSkills/soft';
import Footer from './pages/footer/footer';


const App = () => {
    return (
        <Router>
            <Layout>
                <div className="min-h-screen w-full flex items-center content-center">
                    <div className='flex-grow'>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot" element={<Forgot />} />
                        <Route path="/reset" element={<Reset />} />

                        {/* Protected Routes */}
                        <Route
                            path="/" element={<Main />}
                            // element={
                            //     <RequireAuth>
                            //         <Main />
                            //     </RequireAuth>
                            // }
                        />
                        <Route path="/soft-skills" element={<Soft />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:id" element={<Course />} />
                        {/* Add more protected routes here as needed */}
                    </Routes>
                  </div>
                <Footer />
                </div>
            </Layout>
        </Router>
    );
};

export default App;
