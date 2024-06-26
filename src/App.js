import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import AutomotiveRepairPerformance from './components/AutomotiveRepairPerformance';
import CustomFabrication from './components/CustomFabrication';

const sections = [
  { id: 0, component: <Home /> },
  { id: 1, component: <AutomotiveRepairPerformance /> },
  { id: 2, component: <CustomFabrication /> },
];

function App() {
  const controls = useAnimation();
  const [currentSection, setCurrentSection] = React.useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  React.useEffect(() => {
    controls.start({ y: -currentSection * 100 + 'vh' });
  }, [currentSection, controls]);

  return (
      <div className="app" onWheel={handleScroll}>
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
              <div key={section.id} className={`dot ${section.id === currentSection ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
  );
}

export default App;
