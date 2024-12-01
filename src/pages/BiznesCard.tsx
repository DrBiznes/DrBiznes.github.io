import React from 'react';
import { motion } from 'framer-motion';
import { Water } from '../components/Water/Water';

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

const BORDER = {
  topLeft: '╔',
  topRight: '╗',
  bottomLeft: '╚',
  bottomRight: '╝',
  horizontal: '═',
  vertical: '║'
};

interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', username: '@DrBiznes', url: 'https://github.com/DrBiznes' },
  { platform: 'Twitter', username: '@DrBiznez', url: 'https://twitter.com/DrBiznez' },
  { platform: 'LinkedIn', username: 'jamino', url: 'https://linkedin.com/in/jamino' },
  { platform: 'Discord', username: 'jamino', url: 'https://discord.gg/jqFF64rXZZ' },
  { platform: 'Email', username: 'jamesfemino@gmail.com', url: 'mailto:jamesfemino@gmail.com' }
];

const drawBox = (title: string, content: string[]) => {
  const maxWidth = 60;
  const processedContents: string[] = [];
  
  content.forEach((line) => {
    processedContents.push(line);
  });

  const contentWidth = maxWidth + 4;
  
  const drawLine = (start: string, middle: string, end: string) => {
    return `${start}${middle.repeat(contentWidth)}${end}`;
  };

  const drawContentLine = (content: string) => {
    return `${ASCII.vertical} ${content.padEnd(contentWidth - 2)} ${ASCII.vertical}`;
  };

  return [
    drawLine(ASCII.topLeft, ASCII.horizontal, ASCII.topRight),
    drawContentLine(title),
    drawLine(ASCII.teeRight, ASCII.horizontal, ASCII.teeLeft),
    ...processedContents.map(content => drawContentLine(content)),
    drawLine(ASCII.bottomLeft, ASCII.horizontal, ASCII.bottomRight)
  ].join('\n');
};

const drawBusinessCard = (content: string[]) => {
  const width = 76;
  
  const topLine = `${BORDER.topLeft}${BORDER.horizontal.repeat(width)}${BORDER.topRight}`;
  const bottomLine = `${BORDER.bottomLeft}${BORDER.horizontal.repeat(width)}${BORDER.bottomRight}`;

  return (
    <div className="font-mono">
      <pre>{topLine}</pre>
      {content.map((line, i) => (
        <pre key={i}>
          {BORDER.vertical} {line.padEnd(width - 2)} {BORDER.vertical}
        </pre>
      ))}
      <pre>{bottomLine}</pre>
    </div>
  );
};

export const BiznesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col items-center justify-center font-mono text-white relative"
    >
      <div className="flex flex-col items-center space-y-8 p-8">
        {/* Business card with double-line border */}
        <div className="whitespace-pre text-left w-[800px]">
          {drawBusinessCard([
            'TR                                                     James P. Femino',
            '                                                          Treasurer',
            '',
            '',
            '',
            '                                        Thunderegg Records, Non Profit',
            '                                                   Eugene, Oregon',
            '                                   One of the worlds top 3 problem solvers'
          ])}
        </div>

        {/* Original ASCII box for the poem */}
        <div className="whitespace-pre text-left w-[500px]">
          <pre>
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
          </pre>
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
      <Water />
    </motion.div>
  );
};

export default BiznesCard; 