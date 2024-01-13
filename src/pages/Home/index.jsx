import React from 'react'
import './index.css'
import niralaImage from '../../assets/images/nirala_bgless.jpg'
import Projects from '../Projects'
import Skills from '../Skills'
import Footer from '../Footer'
import Educations from '../Educations'
import SideMenu from '../../components/core/SideMenu'
import Connect from '../Connect'

const Home = () => {

  return (
    <>
      <div className='main_container'>
        <div id='menuIconStyle'>
          <SideMenu />
        </div>
        <div className='main_container_2'>
          <div>
            <h1 className='headerTextStyle'>Hii,</h1>
            <h1 className='headerTextStyle'>I'm Nirala Kumar</h1>
            <p className='professionTextStyle'>Software Engineer</p>
          </div>
          <img src={niralaImage} alt="Nirala Kumar" width="320" height="400"
            style={{ borderRadius: 30, borderWidth: 2, borderStyle: 'solid', borderColor: 'white' }} />
        </div>
      </div>
      <Educations />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </>
  )
}

export default Home
