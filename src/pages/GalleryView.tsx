import React, { useState } from 'react';
import { useParams, useNavigate, Navigate, useSearchParams } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lg-video.css';
import { photoGalleries } from '../config/photos';

export const GalleryView = () => {
  const { galleryId, setId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isClosing, setIsClosing] = useState(false);

  const gallery = galleryId ? photoGalleries[galleryId] : undefined;
  const photoSet = gallery?.photoSets.find(set => set.folderId.split('/').pop() === setId);
  const initialPhotoIndex = parseInt(searchParams.get('photoIndex') || '0');

  if (!gallery || !photoSet) {
    return <Navigate to="/404" replace />;
  }

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      navigate(`/photos/${galleryId}/${setId}`);
    }
  };

  return !isClosing ? (
    <div className="fixed inset-0 bg-black">
      <div className="relative h-full w-full">
        <div className="relative h-full w-full z-[1000]">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgVideo]}
            mode="lg-fade"
            elementClassNames="gallery-container"
            exThumbImage="data-thumb"
            onInit={(detail) => {
              setTimeout(() => {
                detail.instance.openGallery(initialPhotoIndex);
              }, 100);
            }}
            onBeforeClose={() => {
              setIsClosing(true);
              return true;
            }}
            onAfterClose={handleClose}
            download={true}
            counter={false}
            addClass="custom-gallery"
            controls={true}
          >
            {photoSet.allPhotos.map((photo, index) => (
              <button
                key={index}
                className="gallery-item"
                data-src={photo.type === 'video' ? undefined : photo.imageUrl}
                data-video={photo.type === 'video' ? JSON.stringify({
                  source: [{
                    src: photo.imageUrl,
                    type: 'video/mp4'
                  }],
                  attributes: {
                    preload: false,
                    controls: true,
                    poster: photo.thumbnailUrl
                  }
                }) : undefined}
                data-thumb={photo.thumbnailUrl || photo.imageUrl}
                data-sub-html={`<h4>${photo.title}</h4><p>${photo.description || ''}</p>`}
              >
                {photo.type === 'video' ? (
                  <video className="hidden" poster={photo.thumbnailUrl}>
                    <source src={photo.imageUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    alt={photo.title} 
                    src={photo.imageUrl} 
                    className="hidden"
                  />
                )}
              </button>
            ))}
          </LightGallery>
        </div>
      </div>

      <style>
        {`
          .custom-gallery {
            position: fixed !important;
            inset: 0 !important;
            z-index: 1500 !important;
          }
          
          .lg-backdrop {
            z-index: 1400 !important;
          }

          .lg-outer {
            z-index: 1500 !important;
          }

          .lg-container {
            position: fixed !important;
            inset: 0 !important;
          }

          .lg-toolbar {
            z-index: 1502 !important;
          }

          .gallery-container {
            position: fixed !important;
            inset: 0 !important;
            z-index: 1500 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .lg-components {
            pointer-events: auto !important;
            z-index: 1600 !important;
          }

          .lg-sub-html {
            z-index: 1600 !important;
          }

          .lg-counter {
            display: none !important;
          }

          .lg-close {
            /* Remove this commented-out rule to show the close button */
            /* display: none !important; */
          }

          .lg-img-wrap {
            pointer-events: auto !important;
          }

          .lg-outer * {
            pointer-events: auto !important;
          }
        `}
      </style>
    </div>
  ) : null;
};

export default GalleryView;