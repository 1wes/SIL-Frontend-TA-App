import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const useAuthRedirection = () => {
    
    const navigate = useNavigate();
    
    useEffect(() => {
        
        const userCredentials = localStorage.getItem("userCredentials");

        if (!userCredentials) {
            navigate("/login")
        } else {
            navigate("/home");
        }
    }, [navigate]);
}

export default useAuthRedirection;