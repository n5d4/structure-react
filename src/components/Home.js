import React from 'react';
// import homeImage from '../assets/slowmo.gif';
import logo from '../assets/logo_crop_invert.png';

const Home = () => {
    const imageUrl = 'https://i.gifer.com/6bh.gif';

    return (
        <div className="section">

            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                {/*<div className='section-title'>Structure MKE</div>*/}
                <img src={logo} alt="Home" className="logo"/>
                <p className='section-text'>Some text to test stuff</p>
                <button className="custom-button">Learn More</button>
            </div>
        </div>
    );
};

export default Home;
