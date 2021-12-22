import React, {useEffect, useState} from "react";

const AuthContect = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const stored = localStorage.getItem('isLoggedIn');
        if (stored === '1') {
            setLoggedIn(true);
        }
    }, []);
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setLoggedIn(true);
    }
    return (
        <AuthContect.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContect.Provider>
    )
}

export default AuthContect;
