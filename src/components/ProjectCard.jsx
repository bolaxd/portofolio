import { Link } from 'react-router-dom'
import { ClockIcon, StarFilledIcon, EyeOpenIcon } from '@radix-ui/react-icons'

function ProjectCard({ title, description, image, slug, time, star, watch }) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="border border-slate-700 bg-slate-900/20 rounded-lg overflow-hidden">
        <img src={image} className="object-cover w-full h-24 rounded-lg" alt="" />
        <div className="p-2">
          <p className="mb-1 text-sm text-start font-bold text-gray-200">{title}</p>
          <span className="flex gap-3" >
            <p className="flex text-[10px] text-end font-light text-gray-200"><ClockIcon className="" width={13} height={13} />&nbsp;{time}</p>
            <p className="flex text-[10px] text-end font-light text-gray-200"><EyeOpenIcon className="" width={13} height={13} />&nbsp;{watch}</p>
            <p className="flex text-[10px] text-end font-light text-gray-200"><StarFilledIcon className="" width={13} height={13} />&nbsp;{star}</p>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard