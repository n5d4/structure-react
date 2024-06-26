import React from 'react';
import fabricationImage from '../assets/ferrari.gif';

const CustomFabrication = () => {
    return (
        <div className="section">
            <div className="background-image" style={{backgroundImage: `url(${fabricationImage})`}}></div>
            <div className="content">
                <div className='section-title'>Custom Fabrication</div>
                <p className='section-text'>We do this and that and more of this.</p>
            </div>
        </div>
    );
};

export default CustomFabrication;
