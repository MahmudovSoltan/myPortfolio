import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import "./skilss.css";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="container skills_main" id="skills">
      <div className="about_tile">
        <h2>Skills</h2>
      </div>
      <p className="skills_text">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="skills_fild">
        <Fade cascade damping={0.1}>
          <div className="skills_fild_box">
            <FaHtml5 color="#c95835" size={64} />
            <h6>Html</h6>
          </div>
          <div className="skills_fild_box">
            <FaCss3Alt color="#3f6db4" size={64} />
            <h6>Css</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-javascript.d5945e90.svg"
              alt=""
            />
            <h6>Javascript</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-typescript.0f2fa2a9.svg"
              alt=""
            />
            <h6>Typescript</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-react.f09634b9.svg"
              alt=""
            />
            <h6>React</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-nextjs.3f6cd734.svg"
              alt=""
            />
            <h6>Next.js</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-sass.9a084d16.svg"
              alt=""
            />
            <h6>Sass/Scss</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              height={64}
              src="https://sagarshah.dev/_next/static/media/icon-tailwindcss.6649f603.svg"
              alt=""
            />
            <h6>Tailwindcss</h6>
          </div>
          <div className="skills_fild_box">
            <img
              width={64}
              src="https://sagarshah.dev/_next/static/media/icon-git.e364d254.svg"
              alt=""
            />
            <h6>Git</h6>
          </div>
          <div className="skills_fild_box">
            <FaGithub size={64} color="white" />
            <h6>GitHub</h6>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;