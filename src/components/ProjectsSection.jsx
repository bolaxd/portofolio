import { projects } from '../data/posts'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import ProgressBar from './ProgressBar'

function ProjectsSection() {
	const [showAll, setShowAll] = useState(false)
	let projectsSlice = showAll ? projects : projects.slice(0, 4)
  return (
  	<div id="#projectsSection" className="my-20 justify-center text-center">
      <h1 className="uppercase font-extrabold text-4xl">Projects</h1>
      <div
        className="mt-8 mb-2 py-4 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {projectsSlice.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            slug={project.slug}
            time={project.time}
            star={project.star}
            watch={project.watch}
          />
        ))}
      </div>
      {(projects.length > 4) ? 
      <button onClick={() => setShowAll(!showAll)} className="rounded-lg px-2 py-1 border border-slate-200 text-md">
          { showAll ? 'Show Less' : 'Show More'}
      </button> : ''}
    </div>
  )
}

export default ProjectsSection