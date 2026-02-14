import { useState , useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const [auth , setAuth] = useState(null);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get("http://localhost:5000/api/verification/me" , {
                    withCredentials: true
                })

                setAuth(true)
            } catch (error) {
                setAuth(false)
            }
        }

        checkAuth()
    },[])

    if (auth === null) return <p>Checking authentication...</p>;

    return auth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes