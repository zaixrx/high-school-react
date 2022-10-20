import image from "../../Assets/img/cool.png";
import "../../Assets/styles/posts.css";

const Post = (props:any) => (
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
            <Post />
            <Post />
            <Post />
        </section>
    )
}