import React from 'react'
import './index.css'
const Skills = ({skillsRef}) => {
  const logoImageHeight = 40;
  const logoImageWidth = 50;
  return (
    <>
      <div className='skills_main_container' ref={skillsRef}>
        <h1 className='fs-1'>Skills</h1>
        <div>
          <ul>
            <div className='skills_inner_container'>
              <li>
                <div>
                  <li>
                    <div className='skills_div_style'>
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='React Native Logo'
                      />
                      <h2 className='h2'>React Native</h2>
                    </div>
                  </li>
                  <li>
                    <div className='skills_div_style'>
                      <img
                        src='https://pngset.com/images/javascript-logo-number-symbol-text-label-transparent-png-560960.png'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='JavaScript Logo'
                      />
                      <h2 className='h2'>JavaScript</h2>
                    </div>
                  </li>
                  <li>
                    <div className='skills_div_style'>
                      <img
                        src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='Java Logo'
                      />
                      <h2 className='h2'>Java</h2>
                    </div>
                  </li>
                </div>
              </li>
              <li>
                <div>
                  <li>
                    <div className='skills_div_style'>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='Github Logo'
                      />
                      <h2 className='h2'>GitHub</h2>
                    </div>
                  </li>
                  <li>
                    <div className='skills_div_style'>
                  <img
                        src='https://png.pngtree.com/png-clipart/20190705/original/pngtree-html-file-document-icon-png-image_4187497.jpg'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='HTML Logo'
                      />
                    <h2 className='h2'>HTML</h2>
                    </div>
                    </li>
                  <li>
                    <div className='skills_div_style'>
                  <img
                        src='https://logospng.org/download/css-3/logo-css-3-2048.png'
                        width={logoImageWidth}
                        height={logoImageHeight}
                        alt='CSS Logo'
                      />
                    <h2 className='h2'>CSS</h2>
                    </div>
                    </li>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills