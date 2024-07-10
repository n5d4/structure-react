import React, {useEffect, useState} from 'react';
import logo from "../assets/logo.png";
import { motion } from 'framer-motion';
import fabricationImageDesktop from "../assets/plasma.gif";
import fabricationMobile from "../assets/plasma-mobile.gif";

const CustomFabrication = ({currentSection}) => {
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
            <motion.div
                    className="section-title"
                    initial={{ y: -100, opacity: 0 }}
                    animate={currentSection === 2 ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Custom Fabrication
                </motion.div>
                <hr className="hr-cf"/>
                <motion.div
                    // className='section-text'
                    initial={{ y: 100, opacity: 0 }}
                    animate={currentSection === 2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className='section-text'>We specialize in welding, plasma cutting, and crafting bespoke furniture, automotive components, railings, and more.</p>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default CustomFabrication;
