import "./projects.css";
import ProjectCard from "./projectCard";
import { PROJECT_DATA } from "../data/data";

export default function Projects() {
  return (
    <div className="projects-main" id="Projects">
      <div className="projects-parent">
        <p>Projects I'm Passionate About</p>
        <div className="section-header-container">
          <h1>Projects</h1>
          <div className="line"></div>
        </div>
        <p
          style={{
            marginBottom: "30px",
            fontWeight: "300",
            color: "var(--grey-text)",
          }}
        >
          These are only some of the projects I'm showcasing. More projects on
          my Github!
        </p>
        <div className="projects-card-container">
          {PROJECT_DATA.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
}
