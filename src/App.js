import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import AutomotiveRepairPerformance from './components/AutomotiveRepairPerformance';
import CustomFabrication from './components/CustomFabrication';

const App = () => {
    const controls = useAnimation();
    const [currentSection, setCurrentSection] = useState(0);
    const [scrollDisabled, setScrollDisabled] = useState(false);
    const [touchStartY, setTouchStartY] = useState(null);

    const sections = [
        { id: 0, component: <Home disableScroll={setScrollDisabled} /> },
        { id: 1, component: <AutomotiveRepairPerformance disableScroll={setScrollDisabled} /> },
        { id: 2, component: <CustomFabrication /> },
    ];

    const handleScroll = (event) => {
        if (!scrollDisabled) {
            if (event.deltaY > 0 && currentSection < sections.length - 1) {
                setCurrentSection(currentSection + 1);
            } else if (event.deltaY < 0 && currentSection > 0) {
                setCurrentSection(currentSection - 1);
            }
        }
    };

    const handleTouchStart = (event) => {
        setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event) => {
        if (!scrollDisabled && touchStartY !== null) {
            const deltaY = event.touches[0].clientY - touchStartY;
            if (deltaY > 50 && currentSection > 0) {
                setCurrentSection(currentSection - 1);
                setTouchStartY(null);
            } else if (deltaY < -50 && currentSection < sections.length - 1) {
                setCurrentSection(currentSection + 1);
                setTouchStartY(null);
            }
        }
    };

    useEffect(() => {
        controls.start({ y: -currentSection * 100 + 'vh' });
    }, [currentSection, controls]);

    return (
        <div className="app" onWheel={handleScroll} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <motion.div
                className="sections"
                animate={controls}
                transition={{ duration: 0.35 }}
            >
                {sections.map((section) => (
                    <div key={section.id} className="section">
                        {section.component}
                    </div>
                ))}
            </motion.div>
            <div className="indicator">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`dot ${section.id === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(section.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default App;
