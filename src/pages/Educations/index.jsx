import React from 'react'
import './index.css'
import EducationCardCell from '../../components/core/Card'
import { educationCardData, educationsContent } from '../../utils/globalConstant'

const Educations = ({ educationRef }) => {
    return (
        <div className='educations_main_container' ref={educationRef}>
            <h1 className='fs-1'>{educationsContent.heading}</h1>
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
