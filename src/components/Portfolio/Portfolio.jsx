import React from 'react';
import { projects } from './index';
import ProjectCard from './ProjectCard';
import './portfolio.css';



const Portfolio = () => {
  return (
    <section className='section container'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container">
         {projects.map(project=>(
           <ProjectCard key={project.id} project={project}/>
         ))}
        </div>
    </section>
  )
}

export default Portfolio