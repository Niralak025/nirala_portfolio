import React from 'react'
import './index.css'
import EducationCardCell from '../../components/core/Card'
/**
 * This is the showcase page all the components in project should be display in this page.
 * @returns 
 */

const SideMenuRough = () => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <EducationCardCell
                key={1}
                imageSrc={'https://images.static-collegedunia.com/public/college_data/images/appImage/1490866868147625398012.jpg'}
                title={'Bachlore in technology'}
                subTitle={'Electronics and communication engineering'}
                description={'Technocrats institute of technology, Bhopal(M.P) '}
            />
        </div>
    )
}

export default SideMenuRough
