import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthenticationContext from "../Context/AuthenticationContext";

import styles from "../Assets/styles/login.module.css";

export default function Login() {
    const handleFormSubmition = (e : any) => {
        e.preventDefault();
    };

    const { registerFunction } = useContext(AuthenticationContext);

    return (
        <div className={styles.login}>
            <div className={styles.login_background_layer}></div>
            <div className={styles.login_main}>
                <h1 className={styles.login_main_text}>Register</h1>
                <form className={styles.login_fields} onSubmit={registerFunction} autoComplete="off">
                    <div className={styles.login_field_group}>
                        <input type="text" name="username" id="username" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="username" className={styles.login_field_label}>Username</label>
                    </div>
                    <div className={styles.login_field_group}>
                        <input type="text" name="firstname" id="firstname" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="firstname" className={styles.login_field_label}>First name</label>
                    </div>
                    <div className={styles.login_field_group}>
                        <input type="text" name="lastname" id="lastname" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="lastname" className={styles.login_field_label}>Last name</label>
                    </div>
                    <div className={styles.login_field_group}>
                        <input type="password" name="password1" id="password1" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="password1" className={styles.login_field_label}>Password</label>
                    </div>
                    <div className={styles.login_field_group}>
                        <input type="password" name="password2" id="password2" className={styles.login_field_input} placeholder=" " autoComplete="off" />
                        <label htmlFor="password2" className={styles.login_field_label}>Confirm password</label>
                    </div>
                    <input type="submit" className={styles.login_field_submit} />
                </form>
                <Link to="/login" className={styles.login_help}>Already have an account?</Link>
            </div>
        </div>
    );
}