import logo from '../../assets/images/About.jpg'
import './homeright.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeRigt = () => {
  // AOS.init({
  //   duration: 1500,
  //   once: true, 
  // });
  return (
    <div className='home_right_image' >
        <img src={logo} alt="" />
    </div>
  )
}

export default HomeRigt