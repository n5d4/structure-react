import React from 'react';
import fabricationImage from '../assets/plasma.gif';
import logo from "../assets/logo.png";

const CustomFabrication = () => {
    return (
        <div className="section">
            <img src={logo} alt="Logo" className="corner-logo"/>
            <div className="background-image" style={{backgroundImage: `url(${fabricationImage})`}}></div>
            <div className="content">
                <div className='section-title'>Custom Fabrication</div>
                <p className='section-text'>We do this and that and more of this.</p>
                <button className="custom-button">Gallery</button>
            </div>
        </div>
    );
};

export default CustomFabrication;
