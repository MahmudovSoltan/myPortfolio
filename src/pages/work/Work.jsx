import WorkLeft from "../../components/work/WorkLeft";
import WorkRight from "../../components/work/WorkRight";
import {data} from '../../db.js'
import "./work.css";

const Work = () => {

  
  return (
    <div className="work_main_container container" id="work">
      <div className="container">
        <div className="about_tile">
          <h2>Work</h2>
        </div>
        <p className="skills_text">
        Some of the noteworthy projects I have built:
        </p>
      </div>
      {
        data.map((item,index)=>(
          <div key={index} className="work_sectons">
            <WorkLeft image={item.image} link={item.link}/>
            <WorkRight  name={item.name} desc = {item.description} link={item.link} tec={item.tecnolgy} />
          </div>

        ))
      }
    </div>
  );
};

export default Work;
