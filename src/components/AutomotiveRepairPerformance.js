import React, {useEffect, useState} from 'react';
import automotiveImage from '../assets/automotive.gif';
import logo from '../assets/logo.png';
import Modal from "react-modal";

const AutomotiveRepairPerformance = ({ disableScroll }) => {
    const [isModalOpen, setModalOpen] = useState(false);

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
            <div className="background-image" style={{backgroundImage: `url(${automotiveImage})`}}></div>
            <img src={logo} alt="Logo" className="corner-logo"/>
            <div className="content">
                <div className='section-title'>Automotive</div>
                <p className='section-text'>From routine maintenance to intricate repairs, we've got you covered.</p>
                <button className="custom-button" onClick={openModal}>Services</button>
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
