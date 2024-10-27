import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add JWT token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken'); // Adjust based on where you store the token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle specific error statuses if needed
        return Promise.reject(error);
    }
);

export default axiosInstance;
