import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio';

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       {portfolio.map(project => (
          <PortfolioItem 
          desc={project.desc}
             imgUrl={project.imgUrl}
             title={project.title}
             stack={project.stack}
             link={project.link}
          />
       ))}
    </div>
 </div>
  )
}

export default Portfolio