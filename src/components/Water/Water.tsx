import { useEffect, useState } from 'react';
import './Water.css';

export const Water = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const waterWidth = width - 500;
  
  // More detailed wave patterns that cycle through animation
  const wavePatterns = [
    "._.-._.-.,.-~^~-.,_,.-~^~-.,_,.-~^~-.,_,.-~^~-.,_,.-~^~-.,",
    "._.-._.--~^~-.,_,.-~^~-.,_,.-~^~-.,_,.-~^~-.,_,.-~^~-.,_,"
  ];

  return (
    <div className="water-container">
      <pre className="water-animation" style={{ width: `${waterWidth}px` }}>
        {wavePatterns.map((pattern, index) => (
          <div key={index} className={`wave-line wave-${index + 1}`}>
            {pattern.repeat(6)}
          </div>
        ))}
      </pre>
    </div>
  );
};