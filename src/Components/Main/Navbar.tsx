import "../../Assets/styles/navbar.css";

const Navlink = (props:any) => <li className={props.isActive ? "active-nav-link nav-link" : "nav-link"}><a href={props.href}>{props.text}</a></li>

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="inner-nav">
                <div className="nav-logo">Logo</div>
                <div className="nav-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <ul className="nav-links">
                    <Navlink isActive={true} text={<i className="fa-solid fa-house"></i>} href="#" />
                    <Navlink text={<i className="fa-solid fa-chalkboard-user"></i>} href="#" />
                    <Navlink text={<i className="fa-solid fa-comments"></i>} href="#" />
                </ul>
            </div>
        </nav>
    );
}