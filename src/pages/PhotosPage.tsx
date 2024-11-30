import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { photoGalleries } from '../config/photos';

interface PhotoItem {
  imageUrl: string;
  title: string;
  description: string;
}

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

const PhotoSet: React.FC<{ 
  photos: PhotoItem[]; 
  title: string; 
  description: string;
  setIndex: number;
}> = ({
  photos,
  title,
  description,
  setIndex
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringAnyPhoto, setIsHoveringAnyPhoto] = useState(false);

  // Define positions directly for each photo
  const positions = [
    {
      wrapperStyle: {
        left: '35%',
        top: '15%',
        transform: 'rotate(-12deg)',
        width: '400px',
        position: 'absolute' as const,
        zIndex: 2,
      },
    },
    {
      wrapperStyle: {
        right: '10%',
        top: '25%',
        transform: 'rotate(6deg)',
        width: '500px',
        position: 'absolute' as const,
        zIndex: 3,
      },
    },
    {
      wrapperStyle: {
        left: '28%',
        bottom: '20%',
        transform: 'rotate(-8deg)',
        width: '450px',
        position: 'absolute' as const,
        zIndex: 1,
      },
    },
    {
      wrapperStyle: {
        right: '15%',
        bottom: '15%',
        transform: 'rotate(4deg)',
        width: '380px',
        position: 'absolute' as const,
        zIndex: 4,
      },
    },
  ];

  const getZIndex = (index: number) => {
    return hoveredIndex === index ? 50 : 2;
  };

  const drawBox = (title: string, content: string[], isCenter: boolean = false) => {
    const maxWidth = isCenter ? 80 : 40;
    const processedContents = content.flatMap(text => {
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
      if (currentLine) lines.push(currentLine);
      return lines;
    });

    return (
      <div className="text-white font-mono whitespace-pre break-words">
        {title && (
          <div className="mb-2">
            {`${ASCII.topLeft}${ASCII.horizontal.repeat(Math.min(title.length + 2, maxWidth))}${ASCII.topRight}`}
            {`\n${ASCII.vertical} ${title.slice(0, maxWidth - 2)} ${ASCII.vertical}\n`}
            {`${ASCII.bottomLeft}${ASCII.horizontal.repeat(Math.min(title.length + 2, maxWidth))}${ASCII.bottomRight}`}
          </div>
        )}
        {processedContents.map((line, index) => (
          <div key={index} className="opacity-80">
            {line}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-screen overflow-hidden" style={{ marginLeft: '250px' }}>
      {/* Center Description Box */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHoveringAnyPhoto ? 0 : 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="text-white bg-black/90 border border-white max-w-xl">
          <div className="bg-white/10 px-3 py-1.5 border-b border-white">
            <span className="text-lg">{title}</span>
          </div>
          <div className="p-4">
            {drawBox('', [description], true)}
          </div>
        </div>
      </motion.div>

      {/* Photos */}
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          style={{
            ...positions[index].wrapperStyle,
            zIndex: getZIndex(index),
            transition: 'z-index 0ms'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          onMouseEnter={() => {
            setHoveredIndex(index);
            setIsHoveringAnyPhoto(true);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setIsHoveringAnyPhoto(false);
          }}
        >
          <motion.div
            className="group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="relative">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="object-cover border-4 border-white shadow-2xl"
                style={{ height: '300px', width: '100%' }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-20 left-0 right-0 opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300
                       bg-black/80 p-2 border border-white max-w-full overflow-hidden"
              style={{ width: positions[index].wrapperStyle.width }}
            >
              {drawBox(photo.title, [photo.description], false)}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Fullscreen View */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <img
                src={photos[selectedPhoto].imageUrl}
                alt={photos[selectedPhoto].title}
                className="max-w-full max-h-[90vh] border-4 border-white shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80">
                {drawBox(photos[selectedPhoto].title, [photos[selectedPhoto].description], false)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PhotosPage = () => {
  const { galleryId } = useParams();
  const gallery = galleryId ? photoGalleries[galleryId] : undefined;

  if (!gallery) {
    return <Navigate to="/404" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full overflow-y-auto font-mono"
    >
      {gallery.photoSets.map((set, index) => (
        <PhotoSet
          key={index}
          setIndex={index}
          title={set.title}
          description={set.description}
          photos={set.photos}
        />
      ))}
    </motion.div>
  );
};

export default PhotosPage;