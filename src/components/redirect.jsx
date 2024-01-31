import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent) => {
    
    return (props) => {
        
        const navigate = useNavigate();

        useEffect(() => {
            
            const userCredentials = localStorage.getItem("userCredentials");

            if (!userCredentials) {
                navigate("/login")
            } else {
                navigate("/home");
            }
        }, [navigate]);

        return <WrappedComponent {...props} />
    }
}

export default withAuthRedirect;