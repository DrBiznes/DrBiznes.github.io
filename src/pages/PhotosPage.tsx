import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { photoGalleries, PhotoItem } from '../config/photos';

interface FolderData {
  folderId: string;
  photos: PhotoItem[];
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

const PhotoSet = ({ 
  photos,
  title,
  description,
  setIndex,
  folderData
}: { 
  photos: PhotoItem[]; 
  title: string; 
  description: string;
  setIndex: number;
  folderData: FolderData;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringAnyPhoto, setIsHoveringAnyPhoto] = useState(false);
  const navigate = useNavigate();
  const { galleryId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const photoSetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (photoSetRef.current) {
      observer.observe(photoSetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getRandomOffset = () => {
    return Math.random() > 0.8 ? (Math.random() * 40 - 20) + 'px' : '0px';
  };

  const getRandomSize = (baseSize: number) => {
    return Math.random() > 0.8 ? baseSize + (Math.random() * 60 - 30) : baseSize;
  };

  const positions = useMemo(() => [
    {
      wrapperStyle: {
        left: `calc(35% + ${getRandomOffset()})`,
        top: `calc(15% + ${getRandomOffset()})`,
        transform: 'rotate(-12deg)',
        width: `${getRandomSize(400)}px`,
        position: 'absolute' as const,
        zIndex: 2,
      },
    },
    {
      wrapperStyle: {
        right: `calc(10% + ${getRandomOffset()})`,
        top: `calc(25% + ${getRandomOffset()})`,
        transform: 'rotate(6deg)',
        width: `${getRandomSize(500)}px`,
        position: 'absolute' as const,
        zIndex: 3,
      },
    },
    {
      wrapperStyle: {
        left: `calc(28% + ${getRandomOffset()})`,
        bottom: `calc(20% + ${getRandomOffset()})`,
        transform: 'rotate(-8deg)',
        width: `${getRandomSize(450)}px`,
        position: 'absolute' as const,
        zIndex: 1,
      },
    },
    {
      wrapperStyle: {
        right: `calc(15% + ${getRandomOffset()})`,
        bottom: `calc(15% + ${getRandomOffset()})`,
        transform: 'rotate(4deg)',
        width: `${getRandomSize(380)}px`,
        position: 'absolute' as const,
        zIndex: 4,
      },
    },
  ], []);

  const getZIndex = (index: number) => {
    return hoveredIndex === index ? 50 : positions[index].wrapperStyle.zIndex;
  };

  const handleClick = (clickedPhotoIndex: number) => {
    const setId = folderData.folderId.split('/').pop();
    navigate(`/photos/${galleryId}/${setId}/gallery?photoIndex=${clickedPhotoIndex}`);
  };

  const drawBox = (title: string, content: (string | undefined)[], isCenter: boolean = false) => {
    const validContent = content.filter((item): item is string => !!item);
    
    const maxWidth = isCenter ? 80 : 40;
    
    return (
      <div className="text-white font-mono whitespace-pre-wrap break-words max-w-full overflow-hidden">
        {title && (
          <div className="mb-2">
            {`${ASCII.topLeft}${ASCII.horizontal.repeat(Math.min(title.length + 2, maxWidth))}${ASCII.topRight}`}
            {`\n${ASCII.vertical} ${title.slice(0, maxWidth - 2)} ${ASCII.vertical}\n`}
            {`${ASCII.bottomLeft}${ASCII.horizontal.repeat(Math.min(title.length + 2, maxWidth))}${ASCII.bottomRight}`}
          </div>
        )}
        {validContent.map((text, index) => (
          <div key={index} className="opacity-80" style={{ maxWidth: `${maxWidth}ch` }}>
            {text}
          </div>
        ))}
      </div>
    );
  };

  const textOffset = useMemo(() => ({
    left: getRandomOffset(),
    top: getRandomOffset()
  }), []);

  return (
    <div 
      ref={photoSetRef}
      id={`photo-set-${setIndex}`} 
      className="relative h-screen overflow-hidden" 
      style={{ marginLeft: '250px' }}
    >
      <AnimatePresence>
        {isVisible && (
          <>
            <div 
              className="text-white text-center py-4 opacity-70 absolute top-4 left-0 right-0 z-10"
              style={{ 
                transform: `translate(${textOffset.left}, calc(${textOffset.top} + 1rem))`
              }}
            >
              Click any photo to view the full gallery
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHoveringAnyPhoto ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="text-white bg-black/90 border border-white max-w-xl">
                <div className="bg-white/10 px-3 py-1.5 border-b border-white">
                  <span className="text-lg">{title}</span>
                </div>
                <div className="p-4 max-w-full">
                  {drawBox('', [description], true)}
                </div>
              </div>
            </motion.div>

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
                exit={{ opacity: 0, scale: 0.8 }}
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
                  onClick={() => handleClick(index)}
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PhotosPage = () => {
  const { galleryId, setId } = useParams();
  const [isExiting, setIsExiting] = useState(false);
  const gallery = galleryId ? photoGalleries[galleryId] : undefined;

  // Handle scroll after exit animation completes
  const handleExitComplete = () => {
    window.scrollTo(0, 0);
    setIsExiting(false);
  };

  // Trigger exit animation when galleryId changes
  useEffect(() => {
    setIsExiting(true);
  }, [galleryId]);

  // Existing setId scroll behavior
  useEffect(() => {
    if (setId) {
      const setIndex = gallery?.photoSets.findIndex(set => 
        set.folderId.split('/').pop() === setId
      );
      
      if (setIndex !== undefined && setIndex !== -1) {
        setTimeout(() => {
          const element = document.getElementById(`photo-set-${setIndex}`);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [setId, gallery]);

  if (!gallery) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div 
      className="relative min-h-screen w-full overflow-y-auto font-mono"
    >
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <motion.div
          key={galleryId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3,
            exit: { duration: 0.2 }
          }}
        >
          {gallery.photoSets.map((set, index) => (
            <React.Fragment key={index}>
              <PhotoSet
                setIndex={index}
                title={set.title}
                description={set.description}
                photos={set.photos}
                folderData={{ folderId: set.folderId, photos: set.allPhotos }}
              />
              {index < gallery.photoSets.length - 1 && (
                <motion.div 
                  className="w-full text-center py-8 text-white -mt-20 cursor-pointer relative z-20"
                  whileHover={{ y: [0, -8, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5
                  }}
                  onClick={() => {
                    const nextSet = document.getElementById(`photo-set-${index + 1}`);
                    nextSet?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ↓ Click here for more photos ↓
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PhotosPage;