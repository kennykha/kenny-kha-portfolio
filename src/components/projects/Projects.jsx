import "./projects.scss";
import GitHub from '@mui/icons-material/GitHub';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="name">Projects</div>
            <div className="carousel">
                <div className="container">
                    <div className="project">
                        <div className="left">
                            <h2>Adidas: E-Commerce Site</h2>
                            <p>Javascript, React, Node.js, Express.js, AWS EC2, MySQL</p>
                            <a href="https://github.com/kennykha/Adidas-Ratings-and-Reviews" target="_blank" rel="noreferrer" className="gitHub">
                                <div>GitHub</div>
                                <GitHub className="icon"/>
                            </a>
                        </div>
                        <div className="right">
                            <img src="assets/Adidas.png" alt="adidas" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
