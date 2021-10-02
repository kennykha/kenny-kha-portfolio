import "./navbar.scss";
import { Mail } from "@mui/icons-material"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">KK</a>
                    <div className="mailContainer">
                        <Mail className="mailIcon"/>
                        <span>kennykha@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}
