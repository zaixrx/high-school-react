import styles from "../Assets/styles/home.module.css";

export default function LandingPage () {
    return ( 
        <div className={styles.home}>
            <div className={`${styles.home_section} ${styles.home_main}`}>
                <div className={styles.home_main_background}>
                    <div className={styles.home_main_background_layer}></div>
                </div>
                <div className={styles.home_main_text_wrapper}>
                    <div className={styles.home_main_text}>
                        M.Saleh Yahiawy
                    </div>
                    <div className={styles.home_main_signup_button}>
                        Official website
                    </div>
                </div>
            </div>
        </div>
    );
}