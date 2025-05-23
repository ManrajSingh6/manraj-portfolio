import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { IMAGE_ASSETS_PATH } from "../utils/constants";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-parent">
        <div className="landing-text">
          <h1 style={{ fontWeight: "300", fontSize: "3rem" }}>Manraj Singh</h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "var(--aqua-blue)",
              fontWeight: "300",
            }}
          >
            Software Engineer
          </p>
          <p
            style={{ lineHeight: "25px", marginTop: "15px", fontWeight: "300" }}
          >
            I'm a <span>team player</span> with a <span>positive attitude</span>
            , and enjoy using my critical thinking skills to{" "}
            <span>learn and solve problems.</span> I enjoy full-stack
            development, and have a goal as a developer to{" "}
            <span>
              leverage technology to create a lasting impact on users.
            </span>
          </p>
          <IconContext.Provider value={{ size: "30px" }}>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/manrajs6/">
                <AiOutlineLinkedin className="icon" />
              </a>
              <a href="https://github.com/ManrajSingh6" target="__blank">
                <FaGithubSquare className="icon" />
              </a>
            </div>
          </IconContext.Provider>
          <a className="view-btn" href="#Experience">
            View More
          </a>
        </div>
        <div className="landing-img">
          <img src={`${IMAGE_ASSETS_PATH}/landingImg.png`} alt="code-img" />
        </div>
      </div>
    </div>
  );
}
