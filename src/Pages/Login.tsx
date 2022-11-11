import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import AuthenticationContext from "../Context/AuthenticationContext";

import styles from "../Assets/styles/login.module.css";

export default function Login() {
    const { loginFunction } = useContext(AuthenticationContext);
    
    const handleFormSubmition = (e : any) => {
        const error = loginFunction(e);
    }
    
    return (
        <div className={styles.login}>
            <div className={styles.login_background_layer}></div>
            <div className={styles.login_main}>
                <h1 className={styles.login_main_text}>Login</h1>
                <form className={styles.login_fields} onSubmit={handleFormSubmition}>
                    <div className={styles.login_field_group}>
                        <input type="text" name="username" id="username" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="username" className={styles.login_field_label}>Username</label>
                    </div>
                    <div className={styles.login_field_group}>
                        <input type="password" name="password" id="password" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="password" className={styles.login_field_label}>Password</label>
                    </div>
                    <input type="submit" className={styles.login_field_submit} />
                </form>
                <Link to="/register" className={styles.login_help}>Don't have an account?</Link>
            </div>
        </div>
    );
}