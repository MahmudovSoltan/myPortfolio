import Mode from "../../mode/Mode";
import Navbar from "../../navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header>
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
