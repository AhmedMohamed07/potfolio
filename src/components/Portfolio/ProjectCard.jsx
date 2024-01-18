import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = ({project}) => {
    
  return (
    <a target='_blank' href={project.url} className='project__card'>
        <img src={project.img} alt="project" className='project__img' />
        <h2>{project.name}</h2>
        <h4>Click to visit</h4>
    </a>
  )
}

export default ProjectCard