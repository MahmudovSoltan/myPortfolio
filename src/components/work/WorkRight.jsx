import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

const WorkRight = (props) => {
  const { tec, link, desc, name } = props;
  return (
    <div className="work_right_container">
      <h2 className="project_title">{name}</h2>
      <p className="project_desc">{desc}</p>
      <div className="project_tecnologys">
        {
          tec.map((item,i)=>(
            <div  key={i} className="project_tecnology">{item}</div>
          ))
        }
      </div>
      <div>
        <a target="_blank" href={link}>
          <FaExternalLinkAlt size={24} color="rgb(156 163 175)" />
        </a>
      </div>
    </div>
  );
};

export default WorkRight;

WorkRight.propTypes = {
  tec: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};