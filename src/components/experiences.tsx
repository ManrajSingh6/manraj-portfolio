import "./experiences.css";
import ExperienceCard from "./experienceCard";
import { allExperienceData } from "../data/data";

export default function Experiences(){
    return(
        <div className="experiences-main" id="Experience">
            <div className="experiences-parent">
                <p>Places I've worked and experiences I've been a part of.</p>
                <div className="section-header-container">
                    <h1>Experience</h1>
                    <div className="line"></div>
                </div>
                {
                    allExperienceData.map((item, index) => {
                        return (<ExperienceCard {...item} key={index}/>)
                    })
                }
            </div>
        </div>
    );
}