import "./experiences.css";

interface ExperienceCardProps {
    role: string;
    company: string;
    date: string;
    location: string;
    descriptionPoints: string[];
    imageSource: string
}

const imagePath = '/assets/images/';

export default function ExperienceCard({role, company, date, location, descriptionPoints, imageSource}: ExperienceCardProps){
    return(
        <div className="experience-card-container">
            <div className="card-text">
                <h3 style={{color: "var(--white)"}}>{role} <span>@ {company}</span></h3>
                <p style={{fontWeight: 300}}>{date}</p>
                <p style={{fontWeight: 300}}>{location}</p>
                <ul style={{marginTop: "15px"}}>
                    {
                        descriptionPoints.map((point, index) => {
                            return (<li key={index}>{point}</li>)
                        })
                    }
                </ul>
            </div>
            <div className="img-container">
                <img src={imagePath + imageSource} alt={imageSource}/>
            </div>
        </div>
    );
}