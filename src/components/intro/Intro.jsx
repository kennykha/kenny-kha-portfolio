import "./intro.scss";
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Arrow from '@mui/icons-material/DoubleArrow';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="/assets/kenny.jpeg" alt="kenny" />
                </div>
            </div>
            <div className="right">
                <div className="introRightContainer">
                    <h2>Hello, my name is</h2>
                    <h1 className="name">Kenny Kha</h1>
                    <h3>Full-stack Javascript Developer</h3>
                </div>
                <div className='introContacts'>
                    <a className="introContactItem" href="https://www.linkedin.com/in/kennykha" target="_blank" rel='noreferrer'>
                        <div>LinkedIn</div>
                        <LinkedIn className="icon"/>
                    </a>
                    <a className="introContactItem" href="https://github.com/kennykha" target="_blank" rel='noreferrer'>
                    <div>GitHub</div>
                        <GitHub className="icon"/>
                    </a>
                </div>
                <a href="#projects">
                    <Arrow className="arrowIcon" />
                </a>
            </div>
        </div>
    )
}
