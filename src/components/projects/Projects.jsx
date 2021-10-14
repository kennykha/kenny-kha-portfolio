import "./projects.scss";
import GitHub from '@mui/icons-material/GitHub';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

export default function Projects() {
    const [currentProject, handleCurrentProject] = useState(0);
    const changeProject = (direction) => {
        direction === "left" ? handleCurrentProject(currentProject > 0 ? currentProject - 1 : 2) :
        handleCurrentProject(currentProject < data.length - 1 ? currentProject + 1 : 0);
    }

    return (
        <div className="projects" id="projects">
            <div className="name">Kenny</div>
            <div className="carousel" style={{transform: `translateX(-${currentProject * 100}vw)`}}>
                {data.map(project => (
                <div className="container">
                    <div className="project">
                        <div className="left">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.github} target="_blank" rel="noreferrer" className="gitHub">
                                <div>GitHub</div>
                                <GitHub className="icon"/>
                            </a>
                        </div>
                        <div className="right">
                            <img src={project.img} alt={project.alt} />
                        </div>
                    </div>
                </div>))}
            </div>
            <Arrow className="arrow left" onClick={() => changeProject('left')}/>
            <Arrow className="arrow right" onClick={() => changeProject('right')}/>
        </div>
    )
}

const data = [{
    id: 1,
    title: "Adidas: E-Commerce Site",
    description: "Javascript, React, Node.js, Express.js, AWS EC2, MySQL",
    github: "https://github.com/kennykha/Adidas-Ratings-and-Reviews",
    img: "assets/Adidas.png",
    alt: "adidas"
},{
    id: 2,
    title: "KennectFitness: Fitness Tracker",
    description: "Javascript, React, Node.js, Express.js, MySQL",
    github: "https://github.com/kennykha/KennectFitness",
    img: "assets/KennectFitness.png",
    alt: "KennectFitness"
},{
    id: 3,
    title: "BarCart: Cocktail Generator",
    description: "Javascript, React, Node.js, Express.js, Styled Components, Material-UI, Framer-Motion",
    github: "https://github.com/kennykha/BarCart",
    img: "assets/BarCart.png",
    alt: "BarCart"
}]