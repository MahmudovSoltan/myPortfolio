import ExperiensCard from "../../components/experiens/ExperiensCard";
import "./experiens.css";
export const experiences = [
  {
    id: 2,
    logo: "https://api.siesco.az/imgs/setting/cef86a68-6128-47b5-822f-aabc03d5c263.png",
    role: "Frontend Developer",
    description:
      "Veb layihələrin hazırlanması, CRM sistemlərinin qurulması və idarəetmə panellərinin inkişaf etdirilməsi",
    start: "July 2025",
    end: "Present",
  },
  {
    id: 1,
    logo: "https://neyrosoft.az/assets/logo-BFJd_cv_.png",
    role: "Frontend Developer",
    description: "Website and mobile application development",
    start: "January 2025",
    end: "June 2025",
  },
];
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
          {experiences?.map((item, i) => (
            <ExperiensCard experience={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiens;
