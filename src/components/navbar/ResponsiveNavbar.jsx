import PropTypes from 'prop-types';
import './navbar.css'
import { IoMdClose } from 'react-icons/io';


const ResponsiveNavbar = ({setShowMenu,showMenu}) => {
  return (
    <>
    {
      showMenu &&
    <div className="outlow" onClick={()=>setShowMenu(false)}></div>
    }
      <nav className={ `responsive_navbar ${showMenu?"active":""}`}>
        <div className='responsive_navbar_top'>
        <div className="header_logo">
            <span>&lt; MS /&gt;</span>
          </div>
            <IoMdClose onClick={()=>setShowMenu(false)} color='white' size={36}/>
        </div>
        <ul>
          <li className="resp_navbar_list">
            <a href="#about" onClick={()=>setShowMenu(false)}>About</a>
          </li>
          <li className="resp_navbar_list">
            <a href="#skills" onClick={()=>setShowMenu(false)}>Skills</a>
          </li>
          <li className="resp_navbar_list">
            <a href="#experiens" onClick={()=>setShowMenu(false)}>Experience</a>
          </li>
          <li className="resp_navbar_list">
            <a href="#work" onClick={()=>setShowMenu(false)}>Works</a>
          </li>
          <li className="resp_navbar_list">
            <a href="#contact" onClick={()=>setShowMenu(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
ResponsiveNavbar.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu:PropTypes.boolean
};