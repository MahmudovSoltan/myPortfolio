import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Navbar from "../../navbar/Navbar";
import "./header.css";
import { IoIosMenu } from "react-icons/io";
import ResponsiveNavbar from "../../navbar/ResponsiveNavbar";
import Mode from "../../mode/Mode";

const Header = ({ setShowMenu, showMenu, setDark }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isFixed ? "fixed" : ""}`}>
        <div className="container header_cotainer">
          <div className="header_logo">
            <span>&lt; MS /&gt;</span>
          </div>
          <div className="header_left">
            <Navbar />
            <Mode  setDark={setDark} />
          </div>
          <div className="hamburger_menu">
            <div onClick={() => setShowMenu(true)}>
              <IoIosMenu color="white" size={36} />
            </div>
          </div>
        </div>
      </header>
      <ResponsiveNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
};

export default Header;

Header.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};
