import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaInstagram, FaFacebook, FaAddressCard } from 'react-icons/fa';
import homeImage from '../assets/home-800.gif';
import logo from '../assets/logo.png';

Modal.setAppElement('#root'); // Make sure to set the root element for accessibility

const Home = ({ disableScroll }) => {
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

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="section">
            <div className="background-image" style={{ backgroundImage: `url(${homeImage})` }}></div>
            <div className="content">
                <img src={logo} alt="Home" className="logo" />
                <div className='icon-container'>
                    <button className="social-icon" onClick={() => openLink("https://www.instagram.com/structure_fab_dsg")}>
                        <FaInstagram size={50} />
                    </button>
                    <button className="social-icon" onClick={() => openLink("https://www.facebook.com/Structure.Fab.Design")}>
                        <FaFacebook size={50} />
                    </button>
                    <button className="social-icon" onClick={openModal}>
                        <FaAddressCard size={50} />
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Information"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <button className="close-button" onClick={closeModal}>×</button>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: your-structuremke@gmail.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
            </Modal>
        </div>
    );
};

export default Home;
