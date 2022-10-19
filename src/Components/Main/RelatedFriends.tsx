import pfp from "../../Assets/img/cool.png";
import "../../Assets/styles/relatedfriends.css";

import Footer from "./Footer";

const RelatedFriend = (props:any) => {
    return (
        <div className="related-friend">
            <img src={pfp} />
            <div className="text-wrapper">
                <div>{props.username}</div>
                <p>2AS Student</p>
            </div>
        </div>
    );
}

export default function RelatedFriends() {
    return(
        <div className="related-friends">
            <div className="related-title title-2">
                Related Friends
            </div>
            <div className="related-friends-list">
                <RelatedFriend username="Lorem ipsum" />
                <RelatedFriend username="Lorem ipsum" />
                <RelatedFriend username="Lorem ipsum" />
                <RelatedFriend username="Lorem ipsum" />
            </div>
            <Footer />
        </div>
    )
}