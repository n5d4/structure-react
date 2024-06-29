import React, {useEffect, useState} from 'react';
import logo from "../assets/logo.png";
import fabricationImageDesktop from "../assets/plasma.gif";
import fabricationMobile from "../assets/plasma-mobile.gif";

const CustomFabrication = () => {
    const [backgroundImage, setBackgroundImage] = useState(fabricationImageDesktop);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(fabricationMobile);
            } else {
                setBackgroundImage(fabricationImageDesktop);
            }
        };

        updateBackgroundImage();

        window.addEventListener('resize', updateBackgroundImage);

        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, []);

    return (
        <div className="section">
            <img src={logo} alt="Logo" className="corner-logo"/>
            <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className="content">
                <div className='section-title'>Custom Fabrication</div>
                <p className='section-text'>We do this and that and more of this.</p>
                <button className="custom-button">Gallery</button>
            </div>
        </div>
    );
};

export default CustomFabrication;
