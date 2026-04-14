import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import LiveAgents from '../components/landing/LiveAgents'
import BackedBy from '../components/landing/BackedBy'
import HowItWorks from '../components/landing/HowItWorks'
import WhyMachine from '../components/landing/WhyMachine'
import Token from '../components/landing/Token'
import Ecosystem from '../components/landing/Ecosystem'
import FullBackers from '../components/landing/FullBackers'

export default function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveAgents />
        <BackedBy />
        <HowItWorks />
        <WhyMachine />
        <Token />
        <Ecosystem />
        <FullBackers />
      </main>
      <Footer />
    </>
  )
}
