import "./projects.css";
import {DiGithubBadge} from "react-icons/di";
import {BiLinkExternal} from "react-icons/bi"
import {IconContext} from "react-icons/lib/esm/iconContext";

const imagePath = '/assets/images/';

interface ProjectCardProps {
    projectTitle: string;
    projectImagePath: string;
    projectDescription: string;
    projectBadges: string[];
    projectLiveLink?: string;
    projectGithubLink: string
}

export default function ProjectCard({projectTitle, projectDescription, projectImagePath, projectBadges, projectLiveLink, projectGithubLink}: ProjectCardProps){
    return(
        <div className="project-card">
            <div className="project-card-img-container">
                <img src={imagePath + projectImagePath}/>
            </div>
            <h2>{projectTitle}</h2>
            <p className="project-desc" style={{fontWeight: "300"}}>{projectDescription}</p>
            <div className="badge-container">
                {
                    projectBadges.map((badge, index) => {
                        return (
                            <p key={index}>{badge}</p>
                        )
                    })
                }
            </div>
            <IconContext.Provider value={{size: "30px"}}>
            <div className="icons-container" style={{marginTop: '-20px'}}>
                {
                    projectLiveLink && (
                        <a href={projectLiveLink} target="__blank"><BiLinkExternal className="icon"/></a>
                    )
                }
                <a href={projectGithubLink} target="__blank"><DiGithubBadge className="icon"/></a>
            </div>
            </IconContext.Provider>
        </div>
    )
}