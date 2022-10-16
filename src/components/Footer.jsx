import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href={"https://linkedin.com/in/matheus-almeida-lima-8629b81b2"} target="_blank" rel="noopener noreferrer">       
          <LinkedInIcon />
        </a>
        <a href={"https://github.com/mthalima"} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/math.lma/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a  href={"http://wa.me/+5575992549425"} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        </a>
      </div>
      <p> &copy; 2022 Matthdev.com </p>
    </div>
  )
}

export default Footer
