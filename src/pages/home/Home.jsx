import HomeLeft from "../../components/home/HomeLeft";
import HomeRigt from "../../components/home/HomeRight";
import "./home.css";

const Home = () => {
  return (
    <div className="container home_container">
      <HomeLeft />
      <HomeRigt />
    </div>
  );
};

export default Home;
