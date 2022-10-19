import Navbar from "../Components/Main/Navbar"
import Profile from "../Components/Main/Profile"
import Posts from "../Components/Main/Posts"
import RelatedFriends from "../Components/Main/RelatedFriends"

import "../Assets/styles/main.css";

export default function Main () {
    return (
        <div className="main-page">
            <Navbar />
                <main>
                <div className="inner-main">
                    <Profile />
                    <Posts />
                    <RelatedFriends />
                </div>
            </main>
        </div>
    )
}