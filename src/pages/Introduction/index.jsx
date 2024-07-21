import React from 'react'
import './index.css'
import niralaImage from '../../assets/images/nirala_bgless.jpg'

const Introduction = ({ introRef }) => {
    return (
        <div className='main_container' ref={introRef}>
            <div id='menuIconStyle' />
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
    )
}
export default Introduction;