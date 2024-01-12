import React from 'react'
import './index.css'

const Projects = () => {
  return (
    <>
      <div className='projects_main_container'>
        <h1 className='fs-1'>Projects and Experience</h1>
        <div>
          <ul>
            <div className='projects_inner_container'>
              <li>
                <div className='inner_container'>
                  <h1 className='h2'>WeChat</h1>
                </div>
              </li>
              <li>
                <div className='inner_container_2'>
                  <h1 className='h2'>Advertisement Management</h1>
                </div>
              </li>
              <li>
                <div className='inner_container_3'>
                  <h1 className='h2'>DemoApp</h1>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects
