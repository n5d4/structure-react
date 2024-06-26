import { FaInstagram, FaFacebook, FaAddressCard } from 'react-icons/fa';
import homeImage from '../assets/home-800.gif';
import logo from '../assets/logo.png';
import ContactModal from './ContactModal'
import React, { useState } from 'react';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="section">
            <div className="background-image" style={{backgroundImage: `url(${homeImage})`}}></div>
            <div className="content">
                <img src={logo} alt="Home" className="logo"/>
                {/* <p className='section-text'></p>
                <button className="custom-button">About Us</button> */}
                <div className='icon-container'>
                    <a href="https://www.instagram.com/structure_fab_dsg" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={50} />
                    </a>
                    <a href="https://www.facebook.com/Structure.Fab.Design" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={50} />
                    </a>
                    <button  className="social-icon" onClick={openModal}>
                        <FaAddressCard size={50} />
                    </button>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: your-structuremke@gmail.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
            </ContactModal>
        </div>
    );
};

export default Home;
