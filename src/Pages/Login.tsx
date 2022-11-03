import { Link } from "react-router-dom";
import styles from "../Assets/styles/login.module.css";

export default function Login() {
    const handleFormSubmition = (e : any) => {
        e.preventDefault();
    };

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