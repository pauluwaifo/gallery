import React from "react";
import Auth from "../components/Auth";

function LoginPage({currentEmail, setCurrentEmail}) {
    return ( 
        <Auth currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>
     );
}

export default LoginPage;