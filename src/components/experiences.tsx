import "./experiences.css";
import ExperienceCard from "./experienceCard";
import { EXPERIENCE_DATA } from "../data/data";

export default function Experiences() {
  return (
    <div className="experiences-main" id="Experience">
      <div className="experiences-parent">
        <p>Professional Experience and Extracurriculars</p>
        <div className="section-header-container">
          <h1>Experience</h1>
          <div className="line"></div>
        </div>
        {EXPERIENCE_DATA.map((item, index) => {
          return <ExperienceCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
