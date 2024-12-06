import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Water } from '../components/Water/Water';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Jamino.me</title>
        <meta name="description" content="ENGAGE with EVERYTHING by me Jamino EXPLORE my stuff" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jamino.me" />
        <meta property="og:description" content="ENGAGE with EVERYTHING by me Jamino EXPLORE my stuff" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jamino.me" />
        <meta name="twitter:description" content="ENGAGE with EVERYTHING by me Jamino EXPLORE my stuff" />
        
        {/* Keywords - Keep your name here for SEO */}
        <meta name="keywords" content="James Femino, DrBiznes, jamino, minecraft mods, wynncraft mods, photography, web development, personal website" />
        
        {/* Author - Keep your name here for SEO */}
        <meta name="author" content="James Femino (DrBiznes)" />
        
        {/* Additional SEO metadata */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.jamino.me" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jamino.me",
              "alternateName": "James Femino's Website",
              "url": "https://www.jamino.me",
              "author": {
                "@type": "Person",
                "name": "James Femino",
                "alternateName": "DrBiznes"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="relative min-h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-screen z-20 flex flex-col justify-end"
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30">
            <h1 className="text-4xl font-['IBM_Plex_Mono'] font-bold text-white mb-4 text-center">
              Welcome to my website!$!!$!
            </h1>
            <p className="text-gray-300 font-['IBM_Plex_Mono'] text-center">
              ENGAGE with EVERYTHING by me Jamino EXPLORE my stuff
            </p>
          </div>
          <Water />
        </motion.div>
      </div>
    </>
  );
};