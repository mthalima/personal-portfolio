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
        <LinkedInIcon />
        <GitHubIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
      <p> &copy; 2022 Matthdev.com </p>
    </div>
  )
}

export default Footer
