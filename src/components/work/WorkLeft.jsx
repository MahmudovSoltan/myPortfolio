// import image1 from "../../assets/images/software.png";
import PropTypes from 'prop-types';

const WorkLeft = ({image,link}) => {

    
  return (
    <div className="left_main_container">
      <a target="_blank" href={link}>
        <img src={`${image} `}alt="image1" />
      </a>
    </div>
  );
};



export default WorkLeft;

WorkLeft.propTypes = {
  image: PropTypes.string.isRequired,
  link:PropTypes.string.isRequired
};