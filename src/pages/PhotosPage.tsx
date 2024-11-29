import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { photoGalleries } from '../config/photos';

interface PhotoItem {
  imageUrl: string;
  title: string;
  description: string;
}

const ASCII = {
  teeRight: '├'
};

const PhotoSet: React.FC<{ photos: PhotoItem[]; title: string; description: string }> = ({
  photos,
  title,
  description
}) => {
  const drawBox = (title: string, content: string[]) => {
    const processedContents = content.flatMap(text => {
      const words = text.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      words.forEach(word => {
        if ((currentLine + ' ' + word).length <= 50) {
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
      <div className="inline-block">
        <div className="text-white whitespace-pre">
          {title}
          {processedContents.map((line, index) => (
            <div key={index}>
              {`${ASCII.teeRight} ${line}`}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <div className="mb-8 text-white bg-black/90 border border-white">
        <div className="bg-white/10 px-2 py-1 border-b border-white">
          <span>{title}</span>
        </div>
        <div className="p-4">
          {drawBox('', [description])}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="space-y-4">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-64 object-cover border border-white"
            />
            {drawBox(photo.title, [photo.description])}
          </div>
        ))}
      </div>
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
      <div
        className="mx-auto px-4 pb-32 pt-16 relative"
        style={{
          marginLeft: '25%',
          marginRight: '20%',
          maxWidth: '1200px'
        }}
      >
        {gallery.photoSets.map((set, index) => (
          <PhotoSet
            key={index}
            title={set.title}
            description={set.description}
            photos={set.photos}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PhotosPage;