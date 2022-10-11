import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({name, image, id}) => {

  const navegate = useNavigate();

  return (
    <div className='projectItem'
     onClick={() =>{
      navegate("/projects/" + id)
     }}>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem
