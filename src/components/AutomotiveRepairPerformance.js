import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import Modal from 'react-modal';
import automotiveImageDesktop from '../assets/automotive.gif';
import automotiveMobile from '../assets/automotive-mobile.gif';

const AutomotiveRepairPerformance = ({ currentSection, disableScroll }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(automotiveImageDesktop);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage(automotiveMobile);
            } else {
                setBackgroundImage(automotiveImageDesktop);
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

    return (
        <div className="section">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <img src={logo} alt="Logo" className="corner-logo" />
            <div className="content">
                <motion.div
                    className="section-title"
                    initial={{ y: -100, opacity: 0 }}
                    animate={currentSection === 1 ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Automotive
                    </motion.div>
                    <hr className="hr-arp"/>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={currentSection === 1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className='section-text'>From routine maintenance to intricate repairs, we've got you covered.</p>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={currentSection === 1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.25 }}
                >
                    <button className="custom-button" onClick={openModal}>Services</button>
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
                        <h2>Services</h2>
                        <p>
                            We specialize in a variety of automotive services:
                        </p>
                        <ul>
                            <li>Engine Repair</li>
                            <li>Suspension Work</li>
                            <li>Electrical Repair</li>
                            <li>Diagnostics</li>
                            <li>Clutch Replacement</li>
                            <li>Timing Belts</li>
                            <li>Performance Parts Integration</li>
                            <li>Welding Services</li>
                        </ul>
                        <p>
                            Our dedicated team ensures your vehicle receives top-notch care and performance enhancements
                            tailored to your needs.
                        </p>
                        <p>Contact us for more details!</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AutomotiveRepairPerformance;
