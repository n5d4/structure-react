import React from 'react';
import automotiveImage from '../assets/automotive.gif';

const AutomotiveRepairPerformance = () => {
    return (
        <div className="section">
            <div className="background-image" style={{backgroundImage: `url(${automotiveImage})`}}></div>
            <div className="content">
                <div className='section-title'>Automotive</div>
                {/*<p className='section-text'>Some text to test stuff</p>*/}
            </div>
        </div>
    );
};

export default AutomotiveRepairPerformance;
