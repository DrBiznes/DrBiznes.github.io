import { useEffect, useState } from 'react';
import './Moon.css';

export const Moon = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [starOpacities, setStarOpacities] = useState<{ [key: string]: { [key: number]: { opacity: number, targetOpacity: number, holdTime: number } } }>({});

  // Handle moon eye blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 10000 + 5000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Handle star twinkling
  useEffect(() => {
    const starSymbols = ['*', 'o', '-O-'];
    const initialOpacities: { 
      [key: string]: { 
        [key: number]: { 
          opacity: number, 
          targetOpacity: number,
          holdTime: number 
        } 
      } 
    } = {};
    
    // Initialize opacities for each symbol type
    starSymbols.forEach(symbol => {
      initialOpacities[symbol] = {};
      for (let i = 0; i < 5; i++) {
        initialOpacities[symbol][i] = {
          opacity: Math.random() * 0.5 + 0.5,
          targetOpacity: Math.random() * 0.5 + 0.5,
          holdTime: 0
        };
      }
    });

    setStarOpacities(initialOpacities);

    const twinkleInterval = setInterval(() => {
      setStarOpacities(prev => {
        const newOpacities = { ...prev };
        starSymbols.forEach(symbol => {
          Object.keys(newOpacities[symbol]).forEach(key => {
            const numKey = parseInt(key);
            const star = newOpacities[symbol][numKey];

            // If star is being held at full brightness
            if (star.holdTime > 0) {
              star.holdTime -= 100;
              if (star.holdTime <= 0) {
                // When hold time expires, set new target opacity
                star.targetOpacity = Math.random() * 0.3 + 0.2; // Dim target
              }
              return;
            }

            // Chance to start holding at full brightness
            if (Math.random() < 0.01 && star.opacity < 0.7) { // 1% chance when star is dim
              star.targetOpacity = 1;
              star.holdTime = Math.random() * (
                symbol === '*' ? 2000 : 
                symbol === 'o' ? 4000 : 
                6000
              ) + 2000;
              return;
            }

            // Smoothly transition to target opacity
            const speed = symbol === '*' ? 0.03 : symbol === 'o' ? 0.02 : 0.01;
            if (Math.abs(star.opacity - star.targetOpacity) < 0.05) {
              // Set new target when current target is reached
              star.targetOpacity = Math.random() * 0.5 + 0.5;
            }
            
            // Move opacity towards target
            if (star.opacity < star.targetOpacity) {
              star.opacity += speed;
            } else if (star.opacity > star.targetOpacity) {
              star.opacity -= speed;
            }
            
            // Ensure opacity stays within bounds
            star.opacity = Math.max(0.2, Math.min(1, star.opacity));
          });
        });
        return newOpacities;
      });
    }, 100);

    return () => clearInterval(twinkleInterval);
  }, []);

  const renderAsciiArt = () => {
    const lines = [
      'o                     __...__     *',
      '              *   .--\'    __.=-.             o',
      '     |          ./     .-\'',
      '    -O-        /      /',
      '     |        /    "\'/               *',
      `             |     (${isBlinking ? '●' : '@'})`,
      '            |        \\                         .',
      '            |         \\',
      ' *          |       ___\\                  |',
      '             |  .   /  `                 -O-',
      '              \\  `~~\\                     |',
      '         o     \\     \\            *',
      '                `\\    `-.__           .',
      '    .             `--._    `--\'',
      '                       `---~~`                *',
      '            *                   o'
    ];

    return lines.map((line, index) => {
      // Replace ASCII stars with spans that have opacity animation
      const processedLine = line.replace(/[\*o]|-O-/g, (match, offset) => {
        const symbolCounts: { [key: string]: number } = { '*': 0, 'o': 0, '-O-': 0 };
        const opacity = starOpacities[match]?.[symbolCounts[match] % 5]?.opacity || 1;
        symbolCounts[match]++;
        return `<span class="twinkling-star" style="opacity: ${opacity}">${match}</span>`;
      });

      return <div key={index} dangerouslySetInnerHTML={{ __html: processedLine }} />;
    });
  };

  return (
    <div className="moon-container">
      <pre className="moon-ascii">
        {renderAsciiArt()}
      </pre>
    </div>
  );
}; 