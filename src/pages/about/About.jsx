import AboutLeft from "../../components/about/AboutLeft";
import AboutRight from "../../components/about/AboutRight";
import "./about.css";

const About = () => {
  return (
    <div className="main_about" id="about">
      <div className="container">
        <div className="about_tile">
          <h2 >About me</h2>
        </div>
        <div className="about_sections">
          
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </div>
  );
};

export default About;
