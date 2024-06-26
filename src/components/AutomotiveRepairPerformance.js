import React from 'react';
import automotiveImage from '../assets/fabrication.png';

const AutomotiveRepairPerformance = () => {
    return (
        <div className="section">
            <div className="background-image" style={{backgroundImage: `url(${automotiveImage})`}}></div>
            <div className="content">
                <div className='section-title'>Automotive Repair & Performance</div>
                {/*<p className='section-text'>Some text to test stuff</p>*/}
            </div>
        </div>
    );
};

export default AutomotiveRepairPerformance;
