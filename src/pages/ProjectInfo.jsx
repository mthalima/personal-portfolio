import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectsList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/ProjectInfo.css';

function ProjectInfo(){
    const {id} = useParams();
    const project = ProjectList[id];
    return(
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image}></img>
            <p>
                {project.about}
            </p>
            <GitHubIcon/>
        </div>
    );
}
export default ProjectInfo;