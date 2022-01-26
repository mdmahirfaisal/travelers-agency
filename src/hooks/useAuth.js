import { AuthContext } from "../context/AuthProvider"

import React from "react";

const useAuth = () => {
    const auth = React.useContext(AuthContext);
    return auth;
}

export default useAuth;