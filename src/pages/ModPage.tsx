import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useReadme } from '../hooks/useReadme';
import { mods } from '../config/mods';

const ASCII = {
  topLeft: '┌',
  topRight: '┐',
  bottomLeft: '└',
  bottomRight: '┘',
  horizontal: '─',
  vertical: '│',
  teeRight: '├',
  teeLeft: '┤',
  teeDown: '┬',
  teeUp: '┴',
  cross: '┼'
};

export const ModPage = () => {
  const { modId } = useParams();
  const mod = modId ? mods[modId] : undefined;
  const { readme, isLoading, error } = useReadme(mod?.readmeUrl ?? '');
  const boxRef = React.useRef<HTMLDivElement>(null);

  if (!mod) {
    return <Navigate to="/404" replace />;
  }

  const drawHorizontalLine = (length: number) => ASCII.horizontal.repeat(length);
  
  const padContentLine = (prefix: string, content: string, totalWidth: number) => {
    const contentSpace = totalWidth - prefix.length - 3; // -3 for the vertical bars and space
    const paddedContent = content.slice(0, contentSpace).padEnd(contentSpace);
    return `${ASCII.vertical} ${prefix}${paddedContent} ${ASCII.vertical}`;
  };

  const getMaxContentWidth = (items: string[]) => {
    return Math.max(...items.map(item => item.length)) + 4; // +4 for padding
  };

  const wrapText = (text: string, maxWidth: number) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + ' ' + word).length <= maxWidth) {
        currentLine = currentLine ? `${currentLine} ${word}` : word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

  const drawBox = (contents: { label: string; content: string }[]) => {
    const maxWidth = 60; // Fixed width for consistent appearance
    const processedContents: string[] = [];
    
    contents.forEach(({ label, content }) => {
      const labelWidth = label.length;
      const contentWidth = maxWidth - labelWidth;
      const wrappedContent = wrapText(content, contentWidth);
      
      processedContents.push(`${label}${wrappedContent[0]}`);
      wrappedContent.slice(1).forEach(line => {
        processedContents.push(`${' '.repeat(labelWidth)}${line}`);
      });
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
      ...processedContents.map((content, index) => [
        drawContentLine(content),
        // Only add separator line between different fields, not between wrapped lines
        index < processedContents.length - 1 && 
        !processedContents[index + 1].startsWith(' ') ? 
          drawLine(ASCII.teeRight, ASCII.horizontal, ASCII.teeLeft) : null
      ]).flat().filter(Boolean),
      drawLine(ASCII.bottomLeft, ASCII.horizontal, ASCII.bottomRight)
    ].join('\n');
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={modId} // This ensures animation triggers on mod change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative min-h-screen w-full overflow-y-auto font-mono"
      >
        <div 
          className="mx-auto px-4 pb-32 pt-16 relative"
          style={{ 
            marginLeft: '25%',
            marginRight: '20%',
            maxWidth: '900px'
          }}
        >
          {/* Terminal Window for Mod Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-white bg-black/90 border border-white rounded-lg"
          >
            <div className="bg-white/10 px-2 py-1 border-b border-white rounded-t-lg">
              <span>mod-info</span>
            </div>
            
            <div className="p-4">
              <div className="mb-4 overflow-x-auto">
                <div className="flex gap-8 items-start">
                  <div className="whitespace-pre" ref={boxRef}>
                    {drawBox([
                      { label: 'MOD: ', content: mod.title },
                      { label: 'DESC: ', content: mod.description }
                    ])}
                  </div>
                  <img 
                    src={mod.iconUrl} 
                    alt={`${mod.title} icon`}
                    className="object-contain border border-white rounded-lg mt-4 ml-14"
                    style={{
                      height: boxRef.current ? `${boxRef.current.clientHeight * 0.9}px` : 'auto',
                      width: boxRef.current ? `${boxRef.current.clientHeight * 0.9}px` : 'auto',
                    }}
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="flex gap-3 text-black min-w-fit">
                  {[
                    { url: mod.githubUrl, label: "Github" },
                    { url: mod.modrinthUrl, label: "Modrinth" },
                    { url: mod.curseforgeUrl, label: "CurseForge" }
                  ].map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white hover:bg-gray-200 transition-colors"
                    >
                      [{link.label}]
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* README Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white bg-black/90 border border-white rounded-lg"
          >
            <div className="bg-white/10 px-2 py-1 border-b border-white rounded-t-lg">
              <span>readme.md</span>
            </div>
            
            <div className="p-4">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center items-center h-32"
                  >
                    <div className="animate-pulse">LOADING...</div>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 p-4"
                  >
                    ERROR: {error}
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ReactMarkdown 
                      className="prose prose-invert max-w-none"
                      components={{
                        img: ({node, ...props}) => (
                          <img 
                            {...props} 
                            className="max-w-full h-auto border border-white" 
                            loading="lazy"
                          />
                        ),
                        a: ({node, ...props}) => (
                          <a 
                            {...props} 
                            className="text-white hover:text-gray-300 underline" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                          />
                        ),
                        h1: ({node, ...props}) => (
                          <h1 {...props} className="text-2xl font-bold mt-8 mb-4 first:mt-0 border-b border-white" />
                        ),
                        h2: ({node, ...props}) => (
                          <h2 {...props} className="text-xl font-bold mt-6 mb-3 border-b border-white" />
                        ),
                        p: ({node, ...props}) => (
                          <p {...props} className="mb-4" />
                        ),
                        ul: ({node, ...props}) => (
                          <ul {...props} className="list-none mb-4 space-y-1">
                            {React.Children.map(props.children, child => {
                              if (React.isValidElement(child)) {
                                return <li>{`${ASCII.teeRight} ${child.props.children}`}</li>
                              }
                              return null;
                            })}
                          </ul>
                        ),
                        ol: ({node, ...props}) => (
                          <ol {...props} className="list-none mb-4 space-y-1">
                            {React.Children.map(props.children, (child, index) => {
                              if (React.isValidElement(child)) {
                                return <li>{`[${index + 1}] ${child.props.children}`}</li>
                              }
                              return null;
                            })}
                          </ol>
                        ),
                        code: ({node, inline, ...props}) => (
                          inline ? 
                            <code {...props} className="bg-white/10 px-1" /> :
                            <code {...props} className="block bg-white/10 p-4 overflow-x-auto" />
                        ),
                        strong: ({node, ...props}) => (
                          <strong {...props} className="text-gray-300 font-bold" />
                        ),
                        em: ({node, ...props}) => (
                          <em {...props} className="text-gray-200 italic" />
                        )
                      }}
                    >
                      {readme}
                    </ReactMarkdown>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModPage;