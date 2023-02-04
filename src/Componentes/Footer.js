import './css/FooterStyles.css';
import React from 'react'
import{FaHome,FaPhone,FaMailBulk,FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
               
                <div>
                    <p>405 Somwar Peth.</p>
                    <p>Malkapur</p>

                </div>
            </div>
             <div className="phone">
             <h4>
             <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
             1-22-334-879
             </h4>
             </div>
             <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                  sonamrajupathan@gmail.com
                </h4>
           
             </div>
            </div>
            <div className="right">
                <h4>Aout the Company</h4>
                <p>This is Sonam Pathan.I enjoy creating new projects and solving challenges</p>
                <div className="social">
                
                <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/>

                <FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/> 

                <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/>

                <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/>
            
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer

