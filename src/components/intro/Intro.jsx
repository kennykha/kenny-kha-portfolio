import "./intro.scss";

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
            </div>
        </div>
    )
}
