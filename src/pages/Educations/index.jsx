import React from 'react'
import './index.css'
import EducationCardCell from '../../components/core/Card'
import { educationCardData } from '../../utils/globalConstant'

const Educations = ({ educationRef }) => {
    return (
        <div className='educations_main_container' ref={educationRef}>
            <h1 className='fs-1'>Educations</h1>
            {/**This is the education list */}
            {/*<div>
                <ul className='list-group'>
                    <div className='listStylediv'>
                        <li className='Education'>
                            <h2>Bachlore in Technology(B.Tech)</h2>
                            <h4>Technocrats intitute of Technology Bhopal (M.P)</h4>
                            <text>Electronics and communication Engineering</text><br />
                            <text>CGPA :- 9.36</text>
                        </li>
                        <li className='Education'>
                            <h2>Intermediate in Science(I.Sc)</h2>
                            <h4>Kunwar Singh College Darbhanga (Bihar)</h4>
                        </li>
                        <li className='Education'>
                            <h2>Matriculation</h2>
                            <h4>CKN High School Singhwara Darbhanga (Bihar)</h4>
                        </li>
                    </div>
                </ul>
            </div>**/}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {educationCardData.map((item, index) => (
                    <EducationCardCell
                        key={index}
                        imageSrc={item.imageUrl}
                        title={item.title}
                        subTitle={item.subTitle}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Educations
