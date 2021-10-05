import "./menu.scss";

export default function Menu({ menuOpen, handleMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li><a href="#intro" onClick={() => handleMenuOpen()}>Home</a></li>
                <li><a href="#projects" onClick={() => handleMenuOpen()}>Projects</a></li>
            </ul>
        </div>
    )
}
