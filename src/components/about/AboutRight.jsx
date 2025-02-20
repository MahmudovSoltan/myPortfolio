import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutRight = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
      
    <div className="about_right_container" data-aos="fade-left">
      <h2 className="about_right_title">Curious about me? Here you have it:</h2>
      <p>
        I'm a passionate Front-End Developer specializing in React.js & Next.js.
        I focus on building fast, accessible, and visually appealing web
        applications with clean and maintainable code. Creating smooth user
        experiences and responsive designs is what drives me in development.
      </p>
      <p>
        I started my journey in 2024, and since then, I have been continuously
        improving my skills, learning the latest technologies, and working on
        real-world projects. Through hands-on experience and teamwork, I have
        gained a solid understanding of building modern web applications.
      </p>
      <p>
        While I primarily work on the front end, I enjoy solving problems,
        optimizing performance, and bringing creative ideas to life with
        technologies like Tailwind CSS, Bootstrap, and Git.
      </p>

      <p>
        When I’m not coding, you’ll find me exploring new tech trends,
        contributing to projects, or sharing my learning journey.
      </p>
      <p>
        Quick facts about me: Front-End Developer (React & Next.js) Enthusiastic
        about performance and accessibility Passionate about continuous learning
        Open to new opportunities and collaborations Let’s connect! 🚀
      </p>
    </div>
  );
};

export default AboutRight;
