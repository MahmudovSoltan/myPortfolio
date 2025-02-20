import about from "../../assets/images/_DSC2446.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutLeft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, 
    });
  }, []);
  return (
    <div className="about_Left">
    
        <img src={about} alt=""   data-aos="fade-right" />
    </div>
  );
};

export default AboutLeft;
