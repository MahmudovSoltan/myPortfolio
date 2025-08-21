import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperiensCard = ({ experience }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="main_card" data-aos="fade-up">
      <div className="work_name">
        <img width={120} src={experience.logo} alt={experience.role} />
      </div>
      <div className="work_description" style={{width:"60%"}}>
        <h3 className="role_title">{experience.role}</h3>
        <div className="work_desc">{experience.description}</div>
      </div>
      <div className="work_date">
        <span>{experience.start}</span>
        <span>- {experience.end}</span>
      </div>
    </div>
  );
};

export default ExperiensCard;
