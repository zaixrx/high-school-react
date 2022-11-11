import { useContext } from "react";

import profileImage from "../../Assets/img/cool.png";
import AuthenticationContext from "../../Context/AuthenticationContext";

import "../../Assets/styles/profile.css";

export default function Profile() {
    const { user } = useContext(AuthenticationContext);

    return (
        <section className="profile">
            <div className="profile-banner">
                <img src={profileImage} />
            </div>
            <div className="text-wrapper">
                <div className="bold profile-username">{user.username}</div>
                <p>{`${user.first_name} ${user.last_name}`}</p>
            </div>
        </section>
    )
}