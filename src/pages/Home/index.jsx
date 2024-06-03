import React, { useRef } from 'react'
import './index.css'
import Projects from '../Projects'
import Skills from '../Skills'
import Footer from '../Footer'
import Educations from '../Educations'
import SideMenu from '../../components/core/SideMenu'
import Connect from '../Connect'
import Introduction from '../Introduction'

const Home = () => {
  const introRef = useRef(null)
  const eduRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)

  const scrollToParticularSection = (item) => {
    if (item.id === 1) {
      window.scrollTo({
        top: introRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
    else if (item?.id === 2) {
      window.scrollTo({
        top: eduRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
    else if (item?.id === 3) {
      window.scrollTo({
        top: skillsRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
    else {
      window.scrollTo({
        top: projectRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <SideMenu
        onItemClick={(item) => {
          scrollToParticularSection(item)
        }}
      />
      <Introduction
        introRef={introRef} />
      <Educations
        educationRef={eduRef}
      />
      <Skills
        skillsRef={skillsRef}
      />
      <Projects
        projectRef={projectRef}
      />
      <Connect />
      <Footer />
    </>
  )
}

export default Home
