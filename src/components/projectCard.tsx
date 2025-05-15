import "./projects.css";
import { DiGithubBadge } from "react-icons/di";
import { BiLinkExternal } from "react-icons/bi";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { ProjectData } from "../data/data";
import { IMAGE_ASSETS_PATH } from "../utils/constants";

export default function ProjectCard({
  title,
  description,
  imagePath,
  badges,
  liveLink,
  repoLink,
}: ProjectData) {
  return (
    <div className="project-card">
      <div className="project-card-img-container">
        <img src={`${IMAGE_ASSETS_PATH}/${imagePath}`} />
      </div>
      <h2>{title}</h2>
      <p className="project-desc" style={{ fontWeight: "300" }}>
        {description}
      </p>
      <div className="badge-container">
        {badges.map((badge, index) => {
          return <p key={index}>{badge}</p>;
        })}
      </div>
      <IconContext.Provider value={{ size: "30px" }}>
        <div className="icons-container" style={{ marginTop: "-20px" }}>
          {liveLink && (
            <a href={liveLink} target="__blank">
              <BiLinkExternal className="icon" />
            </a>
          )}
          <a href={repoLink} target="__blank">
            <DiGithubBadge className="icon" />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}
