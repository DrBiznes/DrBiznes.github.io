import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Water } from '../components/Water/Water';
import { Link } from 'react-router-dom';

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
  url: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/DrBiznes' },
  { platform: 'Twitter', url: 'https://twitter.com/DrBiznez' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/jamesfemino/' },
  { platform: 'Discord', url: 'https://discord.gg/jqFF64rXZZ' },
  { platform: 'Email', url: '/email' }
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
    <>
      <Helmet>
        <title>Biznes Card | James P. Femino</title>
        <meta name="description" content="Digital business card for James P. Femino, One of the worlds top 3 problem solvers" />
      </Helmet>
      
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
              '  $$$$$$$$\\ $$$$$$$\\                    James P. Femino',
              '  \\__$$  __|$$  __$$\\                   Treasurer',
              '     $$ |   $$ |  $$ |',
              '     $$ |   $$$$$$$  |',
              '     $$ |   $$  __$$<                   Thunderegg Records, Non Profit',
              '     $$ |   $$ |  $$ |                  Eugene, Oregon',
              '     $$ |   $$ |  $$ |',
              '     \\__|   \\__|  \\__|         One of the worlds top 3 problem solvers'
            ])}
          </div>

          {/* Original ASCII box replaced with new About section */}
          <div className="whitespace-pre text-left w-[500px]">
            <pre>
              {drawBox('About', [
                'I\'m currently a senior pursuing a B.S in Public',
                'Policy Planning and Management at The University of',
                'Oregon with a minor in Sustainable Business.',
                '',
                'I barely know anything about technology, I just',
                'make this stuff as a hobby. My main interest is',
                'trains...',
                '',
                'Like seriously, trains are my thing. I\'ll stay up',
                'for 50 hours straight learning about locomotives',
                'which is probably why I\'m one of the top 3 problem solvers.'
              ])}
            </pre>
          </div>

          <div className="flex flex-wrap justify-center gap-3 w-full mt-4">
            {socialLinks.map(link => (
              link.platform === 'Email' ? (
                <Link
                  key={link.platform}
                  to={link.url}
                  className="px-3 py-1 border border-white hover:bg-white/10 transition-colors"
                >
                  [{link.platform}]
                </Link>
              ) : (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-white hover:bg-white/10 transition-colors"
                >
                  [{link.platform}]
                </a>
              )
            ))}
          </div>
        </div>
        <Water />
      </motion.div>
    </>
  );
};

export default BiznesCard; 