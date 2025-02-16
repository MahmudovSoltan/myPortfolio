import ExperiensCard from "../../components/experiens/ExperiensCard";
import './experiens.css'

const Experiens = () => {
  return (
    <div>
      <div className="main_experiens_div" id="experiens">
        <div className="container">
          <div className="about_tile">
            <h2>Experience</h2>
          </div>
          <p className="skills_text">
            Here is a quick summary of my most recent experiences:
          </p>
          <ExperiensCard />
        </div>
      </div>
    </div>
  );
};

export default Experiens;
