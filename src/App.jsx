import React from 'react'
import Hero from './section/Hero'
import ShowCaseSection from './section/ShowCaseSection'
import NavBar from './component/NavBar'
import FeatureCard from './section/FeatureCard'
import TechStack from './section/TechStack'
import Experience from './section/Experience'
import Contact from './section/Contact'
import Footer from './section/Footer'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ShowCaseSection></ShowCaseSection>
      <FeatureCard></FeatureCard>
      <TechStack></TechStack>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App