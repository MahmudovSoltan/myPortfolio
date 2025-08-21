import { MdOutlineMail } from 'react-icons/md'
import './contact.css'
import { LuPhone } from 'react-icons/lu'
import { FiGithub } from 'react-icons/fi'
import { SiNetlify } from 'react-icons/si'
import { RiVercelLine } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact_container'>
       <div className="container">
        <div className="about_tile">
          <h2>Contact</h2>
        </div>
        <p className="skills_text" style={{textAlign:"center",padding:"0 20%"}}>
        What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
        </p>
        <div className='contact_adress'>
       <span><MdOutlineMail  size={50}   color='rgb(var(--app-gray-900))' /></span> <span>mahmudovsoltan05@gamil.com</span>
        </div>
        <div className='contact_adress'>
       <span><LuPhone  size={50}   color='rgb(var(--app-gray-900))' /></span> <span>+994506678653</span>
        </div>
        <p className='other_adress'>You may also find me on these platforms!</p>
           <div className='websites_link flex'>
                <div className='website_link'>
                    <a href="https://www.linkedin.com/in/soltan-mahmudov-b4872b235/" target='_blank'><FaLinkedin/></a>
                </div>
                <div className='website_link'>
                    <a href="https://app.netlify.com/teams/mahmudovsoltan/sites" target='_blank'><SiNetlify/></a>
                </div>
                <div className='website_link'>
                    <a href="https://vercel.com/mahmudovsoltans-projects" target='_blank'><RiVercelLine/></a>
                </div>
                <div className='website_link'>
                    <a href="https://github.com/MahmudovSoltan" target='_blank'><FiGithub /></a>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Contact