import axios from "axios";
import { useContext } from "react";

import "../../Assets/styles/posts.css";
import image from "../../Assets/img/cool.png";
import AuthenticationContext from "../../Context/AuthenticationContext";

const UserPostInput = () => {
    const { user } = useContext(AuthenticationContext);

    const Post = async (e : any) => {
        e.preventDefault();

        await axios.post("http://127.0.0.1:8000/posts/", {
            description: e.target.info.value,

            owner: user.id
        }).then(() => {
            e.target.info.value = "";
        });
    }

    return ( 
        <form className="post-input block" onSubmit={Post}>
            <input type="text" name="info" placeholder="Post something" />
            <button type="submit">Post</button>
        </form>
    )
}

const Post = () => (
    <div className="post">
        <div className="post-info">
            <img src={image} />
            <p>Koua Mohamed Anis</p>
        </div>
        <img src={image} className="post-image" />
        <div className="post-interactions block">
            <div className="post-interaction">
                <i className="fa-regular fa-heart"></i>999k
            </div>
            <div className="post-interaction">
                <i className="fa-regular fa-comment"></i>999k
            </div>
        </div>
    </div>
);

export default function Posts() {
    return (
        <section className="posts">
            <UserPostInput />
            <Post />
            <Post />
            <Post />
        </section>
    )
}