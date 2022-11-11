import axios from "axios";
import * as react from "react";
import jwtDecode from "jwt-decode";

import * as reactDom from "react-router-dom";

const { createContext, useState } = react;
const { useNavigate } = reactDom;

const AuthenticationContext = createContext(Object());

export function AuthenticationProvider ( { children } : any ) {
    const navigate = useNavigate();
    const tokens = localStorage.getItem("tokens");

    const [user, setUser] = useState(tokens ? jwtDecode(JSON.parse(tokens).access) : null);
    const [authenticationToken, setAuthenticationToken] = useState(tokens ? JSON.parse(tokens) : null);
    
    const login = async (e : any) : Promise<any> => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://127.0.0.1:8000/signin/", {
                username: e.target.username.value,
                password: e.target.password.value
            });
            
            const data = await response.data;
    
            setAuthenticationToken(data);
            setUser(jwtDecode(data.access));

            localStorage.setItem("tokens", JSON.stringify(data));

            navigate("/");
        } catch (error : any) {
            const message = error.response.statusText;

            navigate("/login");

            return message;
        }
    }

    const register = async (e : any) : Promise<any> => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/signup/", {
                username: e.target.username.value,
                first_name: e.target.firstname.value,
                last_name: e.target.lastname.value,
                password1: e.target.password1.value,
                password2: e.target.password2.value
            }).then(() => {
                navigate("/login");
            });
        } catch (error : any) {
            const message = error.response.statusText;

            navigate("/register");

            return message;
        }
    }

    const logout = () => {
        if (localStorage.getItem("tokens")) localStorage.removeItem("tokens");
    }

    const userInfo = {
        user: user,
        loginFunction: login,
        registerFunction: register
    }
    
    return ( 
        <AuthenticationContext.Provider value={userInfo}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContext;