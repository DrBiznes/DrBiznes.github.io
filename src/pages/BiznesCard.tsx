import React from 'react';
import { motion } from 'framer-motion';

const ASCII = {
  topLeft: '┌',
  topRight: '┐',
  bottomLeft: '└',
  bottomRight: '┘',
  horizontal: '─',
  vertical: '│',
  teeRight: '├',
  teeLeft: '┤'
};

interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', username: '@DrBiznes', url: 'https://github.com/DrBiznes' },
  { platform: 'Twitter', username: '@JaminoTrue', url: 'https://twitter.com/JaminoTrue' },
  { platform: 'LinkedIn', username: 'jamino', url: 'https://linkedin.com/in/jamino' },
  { platform: 'Discord', username: 'jamino', url: 'https://discord.gg/your-server' },
  { platform: 'Email', username: 'contact@jamino.dev', url: 'mailto:contact@jamino.dev' }
];

const drawBox = (title: string, content: (string | JSX.Element)[]) => {
  const width = 76;
  
  const topLines = [
    `${ASCII.topLeft}${ASCII.horizontal.repeat(width)}${ASCII.topRight}`,
    `${ASCII.vertical} ${title.padEnd(width - 2)} ${ASCII.vertical}`,
    `${ASCII.teeRight}${ASCII.horizontal.repeat(width)}${ASCII.teeLeft}`,
  ];

  const bottomLines = [
    `${ASCII.bottomLeft}${ASCII.horizontal.repeat(width)}${ASCII.bottomRight}`
  ];

  return (
    <>
      {topLines.map((line, i) => <div key={`top-${i}`}>{line}</div>)}
      {content.map((line, i) => (
        <div key={`content-${i}`} className="flex">
          <span>{ASCII.vertical}</span>
          <div className="flex-1 px-2">
            {typeof line === 'string' ? 
              <span>{line.padEnd(width - 2)}</span> : 
              line
            }
          </div>
          <span>{ASCII.vertical}</span>
        </div>
      ))}
      {bottomLines.map((line, i) => <div key={`bottom-${i}`}>{line}</div>)}
    </>
  );
};

export const BiznesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center font-mono text-white"
    >
      <div className="flex flex-col items-center space-y-8 p-8">
        {/* JAMINO box with wider container */}
        <div className="whitespace-pre text-left w-[800px]">
          {drawBox('Biznes Card`', [
            <div key="line1" className="flex justify-between w-full">
              <span className="text-6xl font-bold drop-shadow-[0_2px_4px_rgba(128,0,128,0.5)]">TR</span>
              <span>James P. Femino</span>
            </div>,
            '                                                          Treasurer',
            '',
            '',
            '',
            '                                        Thunderegg Records, Non Profit',
            '                                                   Eugene, Oregon',
            '                                         University of Oregon Campus'
          ])}
        </div>

        {/* I Know NOTHING box with original width */}
        <div className="whitespace-pre text-left w-[500px]">
          {drawBox('I Know NOTHING', [
            'God, once more I sit and wait,',
            'While Maven spins my mental state,',
            'These dependencies cascade,',
            'Like choices that I shouldn\'t have made.',
            '',
            'Each error cryptic as can be,',
            'Stack traces to infinity,',
            'NullPointerException hell,',
            'Which line? Only God can tell.'
          ])}
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full mt-4">
          {socialLinks.map(link => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-white hover:bg-white/10 transition-colors"
            >
              [{link.platform}]
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BiznesCard; 