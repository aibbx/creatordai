import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import LiveAgents from '../components/landing/LiveAgents'
import HowItWorks from '../components/landing/HowItWorks'

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <LiveAgents />
      <HowItWorks />
      <Footer />
    </div>
  )
}
