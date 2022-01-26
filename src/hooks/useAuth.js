import React from "react";
import { AuthContext } from "../context/AuthProvider"


const useAuth = () => {
    const auth = React.useContext(AuthContext);
    return auth;
}

export default useAuth;