import React from 'react';
import ProjectItem from '../components/ProjectItem';
import foodAppImg from '../assets/food-app.jpg';
import apiWhats from '../assets/whatsApi.png';
import fileConverter from '../assets/file-converter.jpg';
import dashboard from '../assets/dashboard.jpg';
 
import '../Styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Food App" image={foodAppImg}/>
        <ProjectItem name="API Whats" image={apiWhats}/>
        <ProjectItem name="Dashboard" image={dashboard}/>
        <ProjectItem name="File Converter" image={fileConverter}/>
      </div>
    </div>
  )
}

export default Projects