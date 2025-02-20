import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ExperiensCard = () => {
    useEffect(() => {
      AOS.init({
        duration: 500,
        once: true, 
      });
    }, []);
  return (
    <div className="main_card" data-aos="fade-up">
      <div className="work_name">
        <img src="https://neyrosoft.az/assets/logo-BFJd_cv_.png" alt="" />
      </div>
      <div className="work_description">
        <h3 className="role_title"> Forntend Developer</h3>
       <div className="work_desc">
       Website and mobile application development
       </div>
      </div>
      <div className="work_date">
        <span>January 2025</span>
        <span>-Present</span>
        
      </div>
    </div>
  );
};

export default ExperiensCard;
