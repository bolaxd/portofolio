import LandingSection from '../components/LandingSection'
import ProgressSection from '../components/ProgressSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Container } from '../components/Container'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Welcome to my portofolio 🔥</title>
      </Helmet>
      <LandingSection />
      <ProgressSection className="bg-slate-900/30" />
      <ProjectsSection className="bg-slate-900/30" />
      <ContactSection />
    </Container>
  )
}
export default HomePage