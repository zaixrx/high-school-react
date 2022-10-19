import profileImage from "../../Assets/img/cool.png";
import "../../Assets/styles/profile.css";

export default function Profile() {
    return (
        <section className="profile">
            <div className="profile-banner">
                <img src={profileImage} />
            </div>
            <div className="text-wrapper">
                <div className="bold profile-username">Koua Mohamed Anis</div>
                <p>2AS Student</p>
            </div>
        </section>
    )
}