import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="navbar_list">
          <a href="#about">About</a>
        </li>
        <li className="navbar_list">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar_list">
          <a href="#experiens">Experience</a>
        </li>
        <li className="navbar_list">
          <a href="#work">Works</a>
        </li>
        <li className="navbar_list">
          <a href="#contact">Contact</a>
        </li>
        <span className='line'></span>
      </ul>
    </nav>
  )
}

export default Navbar
