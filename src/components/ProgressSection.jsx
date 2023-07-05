import { myskill } from '../data/myskill'
import ProgressBar from './ProgressBar'

function ProgressSection() {
  return (
  	<div id="#progressSection" className="justify-center text-center my-20">
      <h1 className="uppercase font-extrabold text-4xl mb-8">learn progress</h1>
      <div className="bg-fuchsia-600/20 rounded-lg my-2 px-4">
        {myskill.map((skill) => (
          <ProgressBar
            title={skill.langName}
            percent={skill.progress}
            variant={skill.colorLang}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressSection