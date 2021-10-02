import "./navbar.scss";
import { Mail } from "@mui/icons-material"

export default function Navbar({menuOpen, handleMenuOpen}) {
    return (
        <div className={'navbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">KK</a>
                    <div className="mailContainer">
                        <Mail className="mailIcon"/>
                        <span>kennykha@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="menuIcon" onClick={() => handleMenuOpen()}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
