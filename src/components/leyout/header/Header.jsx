import { useEffect, useState } from "react";
import Mode from "../../mode/Mode";
import Navbar from "../../navbar/Navbar";
import "./header.css";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // 0 piksel aşağıya scroll olunanda header sabit olacaq
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isFixed  ? "fixed" : ""}`}>
      <div className="container header_cotainer">
        <div className="header_logo">
          <span>&lt; MS /&gt;</span>
        </div>
        <div className="header_left">
          <Navbar />
          <Mode />
        </div>
      </div>
    </header>
  );
};

export default Header;