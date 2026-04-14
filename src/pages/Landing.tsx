import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import LiveAgents from '../components/landing/LiveAgents'
import HowItWorks from '../components/landing/HowItWorks'
import WhyMachine from '../components/landing/WhyMachine'
import Token from '../components/landing/Token'
import Ecosystem from '../components/landing/Ecosystem'
import BackedBy from '../components/landing/BackedBy'

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <LiveAgents />
      <HowItWorks />
      <WhyMachine />
      <Token />
      <Ecosystem />
      <BackedBy />
      <Footer />
    </div>
  )
}
