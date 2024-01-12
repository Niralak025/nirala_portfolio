import React from 'react'
import './index.css'
import niralaImage from '../../assets/images/nirala_1.jpg'
import Projects from '../Projects'
import Skills from '../Skills'
import Footer from '../Footer'
// import { FiMenu } from "react-icons/fi";
import Educations from '../Educations'
import SideMenu from '../../components/core/SideMenu'
import Connect from '../Connect'

const Home = () => {
  // const [sideMenuShow, setSideMenuShow] = useState(false)

  return (
    <>
      <div className='main_container'>
        <div id='menuIconStyle'>
          <SideMenu />
          {/* <FiMenu color='white' size={40} /> */}
          {/* {sideMenuShow ? <SideMenu /> : null} */}
        </div>
        <div className='main_container_2'>
          <div>
            <h1 className='headerTextStyle'>Hii,</h1>
            <h1 className='headerTextStyle'>I'm Nirala Kumar</h1>
            <p className='professionTextStyle'>Software Engineer</p>
          </div>
          <img src={niralaImage} alt="Nirala Kumar" width="270" height="400"
            style={{ borderRadius: 30, borderWidth: 2, borderStyle: 'solid', borderColor: 'white' }} />
        </div>
      </div>
      <Educations />
      <Skills />
      <Projects />
      <Connect/>
      <Footer />
    </>
  )
}

export default Home
