import { Fragment } from "react";
import { GoogleLogin } from "@react-oauth/google";

import { useNavigate} from "react-router-dom";

import './login.css'

import withAuthRedirect from "./redirect";

const LoginPage = () => {

    const navigate = useNavigate();

    const handleSuccess = (credentialResponse) => {
    
        navigate("/home");

        localStorage.setItem("userCredentials", JSON.stringify(credentialResponse.credential));
    }
    
    return (
        <Fragment>
            <main className="login-component">
                <section className="login-btn">
                    <h3>
                        Sign in to see photos
                    </h3>
                    <div className="google-login-btn">
                        <GoogleLogin onSuccess={handleSuccess} onError={() => { console.log("Login Failed") }} text="signin_with" type="standard"
                        theme="filled_blue"  size="large" shape="pill" logo_alignment="center"  />
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
export default withAuthRedirect(LoginPage);