import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContect from "../../store/auth-contect";

const Navigation = () => {
    const ctx = useContext(AuthContect);
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (<li>
                    <a href="/">Users</a>
                </li>)}
                {ctx.isLoggedIn && (<li>
                    <a href="/">Admin</a>
                </li>)}
                {ctx.isLoggedIn && (<li>
                    <button onClick={ctx.onLogout}>Logout</button>
                </li>)}
            </ul>
        </nav>
    );
};

export default Navigation;
