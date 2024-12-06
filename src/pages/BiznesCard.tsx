import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Water } from '../components/Water/Water';
import { Link } from 'react-router-dom';
import './BiznesCard.css';

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
      <pre style={{ margin: 0 }}>{topLine}</pre>
      {content.map((line, i) => (
        <pre key={i} style={{ margin: 0 }}>
          {BORDER.vertical} {line.padEnd(width - 2)} {BORDER.vertical}
        </pre>
      ))}
      <pre style={{ margin: 0 }}>{bottomLine}</pre>
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
        className="biznes-card-container"
      >
        <div className="content-wrapper">
          <div className="business-card">
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

          <div className="about-section">
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

          <div className="social-links">
            {socialLinks.map(link => (
              link.platform === 'Email' ? (
                <Link
                  key={link.platform}
                  to={link.url}
                  className="social-link"
                >
                  [{link.platform}]
                </Link>
              ) : (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
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