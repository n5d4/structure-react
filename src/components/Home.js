import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaAddressCard, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

import homeImageDesktop from '../assets/home.gif';
import homeImageMobile from '../assets/home-mobile.gif';
import logo from '../assets/logo.png';

Modal.setAppElement('#root');

const Home = ({ currentSection, disableScroll }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(homeImageDesktop);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(homeImageMobile);
            } else {
                setBackgroundImage(homeImageDesktop);
            }
        };

        updateBackgroundImage();

        window.addEventListener('resize', updateBackgroundImage);

        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
            disableScroll(true);
        } else {
            document.body.classList.remove('no-scroll');
            disableScroll(false);
        }
    }, [isModalOpen, disableScroll]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="section">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="content">
            <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={currentSection === 0 ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                      <img src={logo} alt="Home" className="logo" />
                    </motion.div>
                    <br/>
                    <br/>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={currentSection === 0 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                
                <div className='icon-container'>
                    <button className="social-icon instagram-icon" onClick={() => openLink("https://www.instagram.com/structure_fab_dsg")}>
                        <FaInstagram size={50} />
                    </button>
                    <button className="social-icon facebook-icon" onClick={() => openLink("https://www.facebook.com/Structure.Fab.Design")}>
                        <FaFacebook size={50} />
                    </button>
                    <button className="social-icon contact-icon" onClick={openModal}>
                        <FaAddressCard size={50} />
                    </button>
                </div>
                </motion.div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Information"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <button className="close-button" onClick={closeModal}>×</button>
                <div className="modal-body">
                    <div className="about-us">
                        <h2 className='contact-header'>About Us</h2>
                        <p>At Structure MKE, we specialize in enhancing automotive performance and providing meticulous
                            repair services.
                            Located in Milwaukee, our dedicated team combines passion with precision to deliver
                            top-notch solutions tailored
                            to your vehicle's needs. From oil changes to custom fabrication,
                            we're committed to elevating your driving experience with expertise and reliability.</p>
                    </div>
                    <div className="hours">
                        <h2 className='contact-header'>Hours</h2>
                        <p>Tuesday-Sunday, 8:00am-6:30pm</p>
                    </div>
                    <div className="contact-info">
                        <h2 className='contact-header'>Contact Information</h2>
                        <div className='address-container'>
                        <FaMapMarkerAlt /> 7119 W National Ave West Allis, Wi 53214
                        <br />
                        <FaPhone /> 414-882-7099
                        <br/>
                        <FaEnvelope /> structuremke@gmail.com
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Home;
