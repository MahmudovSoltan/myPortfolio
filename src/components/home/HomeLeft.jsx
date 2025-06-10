import "./homeleft.css";
import { GrLocation } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
// import "./home.css";
import { useEffect } from "react";
const HomeLeft = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     once: true, 
  //   });
  // }, []);
  return (
    <div className="home_left_container" >
      <h1 className="about_title">
        Hi, I'm  Soltan <span className="wave-hand">👋</span>
      </h1>
      <p className="about_desc">
        I'm a Front-End Developer specializing in React.js & Next.js, dedicated
        to building high-performance, accessible, and visually engaging digital
        experiences. With over a year of experience, I have been developing
        responsive and user-friendly web applications that provide seamless
        interactions and exceptional usability
      </p>
      <div className="adress">
        <span>
          <GrLocation color="white" size={24} />
        </span>{" "}
        Baku ,Azerbaijani
      </div>
      <div className="websites_link">
        <div className="website_link">
          <a
            href="https://www.linkedin.com/in/soltan-mahmudov-b4872b235/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="website_link">
          <a
            href="https://app.netlify.com/teams/mahmudovsoltan/sites"
            target="_blank"
          >
            <SiNetlify />
          </a>
        </div>
        <div className="website_link">
          <a href="https://vercel.com/mahmudovsoltans-projects" target="_blank">
            <RiVercelLine />
          </a>
        </div>
        <div className="website_link">
          <a href="https://github.com/MahmudovSoltan" target="_blank">
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
