import React, { useState, useRef } from 'react'
import './index.css'
import EducationCardCell from '../../components/core/Card'
import { educationCardData, educationsContent } from '../../utils/globalConstant'

const Educations = ({ educationRef }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = (e) => {
        const container = e.target;
        const scrollLeft = container.scrollLeft;
        const firstCard = container.querySelector('.education-card');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 20; // card width + gap (20px)
            const index = Math.round(scrollLeft / cardWidth);
            const newIndex = Math.min(Math.max(0, index), educationCardData.length - 1);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    const scrollToCard = (index) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const firstCard = container.querySelector('.education-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 20; // card width + gap (20px)
                container.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                });
                setActiveIndex(index);
            }
        }
    };

    return (
        <div className='educations_main_container' ref={educationRef}>
            <h1 className='fs-1'>{educationsContent.heading}</h1>
            <div 
                className="educations-grid-layout" 
                ref={containerRef}
                onScroll={handleScroll}
            >
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

            {/* Pagination Dots (Mobile Only) */}
            <div className="education-pagination-dots">
                {educationCardData.map((_, idx) => (
                    <button
                        key={idx}
                        className={`pagination-dot ${activeIndex === idx ? 'active' : ''}`}
                        onClick={() => scrollToCard(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Educations
