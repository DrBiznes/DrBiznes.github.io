import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Water } from '../components/Water/Water';

interface Playlist {
  name: string;
  embedUrl: string;
}

const playlists: Playlist[] = [
  {
    name: "Azymuchi",
    embedUrl: "https://open.spotify.com/embed/playlist/2dANt44pNB4ddzRXVco3PH"
  },
  {
    name: "nuttin etal",
    embedUrl: "https://open.spotify.com/embed/playlist/0KRKiCJXBYDuvRDqpICTPT"
  },
  {
    name: "river music",
    embedUrl: "https://open.spotify.com/embed/playlist/1ypI5Rv2GJ3JSOWD6P8Q6X"
  },
  {
    name: "all the small boats",
    embedUrl: "https://open.spotify.com/embed/playlist/1xreMBZclgEKqcrhxvmipl"
  },
  {
    name: "Wabaldee dabledee",
    embedUrl: "https://open.spotify.com/embed/playlist/6Jpg8sPM8B3ZiubdzEE1EZ"
  }
];

// Updated Spotify icon component with larger size
const SpotifyIcon = () => (
  <svg 
    width="24"  // Increased size further
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="inline-block mr-0"  // Removed margin completely
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

export const JamPage = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaylistChange = (index: number) => {
    setIsLoading(true);
    setSelectedPlaylist(index);
    // Simulate iframe load time
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full p-8"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Profile and Playlist Cards Container */}
        <div className="flex gap-6" style={{ marginLeft: '12%', marginRight: '20%' }}>
          {/* Profile Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/90 border border-white rounded-lg w-40"
          >
            {/* Title Bar */}
            <div className="border-b border-white px-4 py-2">
              <span className="text-white font-mono">Profile</span>
            </div>
            {/* Content */}
            <div className="p-4">
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src="/spiral.jpg" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-white font-mono text-xl">Jam</h2>
                <a 
                  href="https://open.spotify.com/user/bob10234?si=394e0893e56d47e3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors font-mono text-center flex items-center ml-2"
                >
                  <SpotifyIcon />
                  <span>Open on Spotify</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Playlist Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-black/90 border border-white rounded-lg flex-1"
          >
            {/* Title Bar */}
            <div className="border-b border-white px-4 py-2">
              <span className="text-white font-mono">Playlists</span>
            </div>
            {/* Content */}
            <div className="p-4">
              {/* Updated Playlist Selector with sliding animation */}
              <div className="flex flex-wrap mb-4 border border-white rounded-lg overflow-hidden relative">
                {playlists.map((playlist, index) => (
                  <button
                    key={index}
                    onClick={() => handlePlaylistChange(index)}
                    className={`relative flex-1 min-w-[120px] py-2 px-4 font-mono text-sm transition-colors ${
                      selectedPlaylist === index 
                        ? 'text-black' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {selectedPlaylist === index && (
                      <motion.div
                        layoutId="activePlaylist"
                        className="absolute inset-0 bg-white"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                    <span className="relative z-10">{playlist.name}</span>
                  </button>
                ))}
              </div>

              {/* Playlist Content with Loading State */}
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-xl bg-white/10 h-[152px] animate-pulse"
                  />
                ) : (
                  <motion.div
                    key={selectedPlaylist}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      src={`${playlists[selectedPlaylist].embedUrl}?utm_source=generator`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <Water />
    </motion.div>
  );
};

export default JamPage;