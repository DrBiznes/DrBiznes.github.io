import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Water } from '../components/Water/Water';
import { format, parseISO } from 'date-fns';

interface Playlist {
  name: string;
  embedUrl: string;
}

interface Track {
  name: string;
  artist: string;
  playcount?: number;
  duration?: number;
  lastPlayed?: string;
}

interface Artist {
  name: string;
  playcount: number;
  lastPlayed?: string;
}

interface Album {
  name: string;
  artist: string;
  playcount: number;
  duration?: number;
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

const statsTabs = [
  "Last Played",
  "Top Weekly",
  "Top Monthly",
  "All Time",
  "Top Artists",
  "Top Albums"
] as const;

type StatsTab = typeof statsTabs[number];

const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY;
const LASTFM_USERNAME = 'bob10234';

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
  const [selectedStatsTab, setSelectedStatsTab] = useState<StatsTab>("Last Played");
  const [statsData, setStatsData] = useState<Track[] | Artist[] | Album[]>([]);
  const [isStatsLoading, setIsStatsLoading] = useState(true);

  const handlePlaylistChange = (index: number) => {
    setIsLoading(true);
    setSelectedPlaylist(index);
    // Simulate iframe load time
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    let isMounted = true;  // Track mounted state

    const fetchStatsData = async () => {
      setIsStatsLoading(true);
      try {
        let method = '';
        let params = '';
        
        switch (selectedStatsTab) {
          case "Last Played":
            method = 'user.getrecenttracks';
            params = '&limit=10';
            break;
          case "Top Weekly":
            method = 'user.gettoptracks';
            params = '&period=7day&limit=10';
            break;
          case "Top Monthly":
            method = 'user.gettoptracks';
            params = '&period=1month&limit=10';
            break;
          case "All Time":
            method = 'user.gettoptracks';
            params = '&period=overall&limit=10';
            break;
          case "Top Artists":
            method = 'user.gettopartists';
            params = '&period=overall&limit=10';
            break;
          case "Top Albums":
            method = 'user.gettopalbums';
            params = '&period=overall&limit=10';
            break;
        }

        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json${params}`
        );
        
        // Check if component is still mounted before proceeding
        if (!isMounted) return;
        
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        let transformedData = [];
        
        if (selectedStatsTab === "Top Artists" && isMounted) {
          // Get top artists first
          const artists = data.topartists.artist;
          
          const trackResponse = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1000`
          );
          
          // Check mounted state again after second API call
          if (!isMounted) return;
          
          const trackData = await trackResponse.json();
          
          // Process each artist
          transformedData = artists.map((artist: any) => {
            // Filter tracks to find the most played one by this artist
            const artistTracks = trackData.toptracks.track.filter(
              (track: any) => track.artist.name.toLowerCase() === artist.name.toLowerCase()
            );
            const topTrack = artistTracks[0]; // First track is the most played
            
            return {
              name: artist.name,
              playcount: artist.playcount,
              topTrack: topTrack ? topTrack.name : 'N/A',
              topTrackPlays: topTrack ? topTrack.playcount : 'N/A'
            };
          });
        } else if (selectedStatsTab === "Last Played") {
          transformedData = data.recenttracks.track.map((track: any) => ({
            name: track.name,
            artist: track.artist['#text'],
            lastPlayed: track.date ? new Date(Number(track.date.uts) * 1000).toISOString() : 'Now Playing'
          }));
        } else if (["Top Weekly", "Top Monthly", "All Time"].includes(selectedStatsTab)) {
          transformedData = data.toptracks.track.map((track: any) => {
            console.log(`Track: ${track.name}, Raw duration: ${track.duration}`);
            const durationNum = Number(track.duration);
            const duration = track.duration && durationNum > 0 
              ? Math.max(1, Math.ceil(durationNum / 60)) // Ensure minimum of 1 minute for any valid duration
              : 'N/A';
            return {
              name: track.name,
              artist: track.artist.name,
              playcount: track.playcount,
              duration
            };
          });
        } else if (selectedStatsTab === "Top Albums") {
          transformedData = data.topalbums.album.map((album: any) => ({
            name: album.name,
            artist: album.artist.name,
            playcount: album.playcount,
            url: album.url
          }));
        }

        if (isMounted) {
          setStatsData(transformedData);
          setIsStatsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Stats fetch error:', err);
          setIsStatsLoading(false);
        }
      }
    };

    fetchStatsData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [selectedStatsTab]);

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
              <span className="text-white font-mono">My Profile</span>
            </div>
            {/* Content */}
            <div className="p-4">
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src="/assets/pfp.png" 
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
              <span className="text-white font-mono">Best Playlists Of All Time</span>
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

        {/* New Stats Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/90 border border-white rounded-lg mx-auto"
          style={{ marginLeft: '12%', marginRight: '20%' }}
        >
          {/* Title Bar */}
          <div className="border-b border-white px-4 py-2">
            <span className="text-white font-mono">Spotify Stats</span>
          </div>
          
          {/* Content */}
          <div className="p-4">
            {/* Stats Tab Selector */}
            <div className="flex flex-wrap mb-4 border border-white rounded-lg overflow-hidden relative">
              {statsTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedStatsTab(tab)}
                  className={`relative flex-1 min-w-[120px] py-2 px-4 font-mono text-sm transition-colors ${
                    selectedStatsTab === tab 
                      ? 'text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {selectedStatsTab === tab && (
                    <motion.div
                      layoutId="activeStatsTab"
                      className="absolute inset-0 bg-white"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Stats Content */}
            <AnimatePresence mode="wait">
              {isStatsLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[380px] bg-white/10 animate-pulse rounded-lg"
                />
              ) : (
                <motion.div
                  key={selectedStatsTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-y-auto max-h-[380px]"
                >
                  <table className="w-full text-white font-mono">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-2 px-4 text-left">#</th>
                        {selectedStatsTab === "Top Artists" ? (
                          <>
                            <th className="py-2 px-4 text-left">Artist</th>
                            <th className="py-2 px-4 text-left">Most Played Track</th>
                            <th className="py-2 px-4 text-right">Track Plays</th>
                            <th className="py-2 px-4 text-right">Total Plays</th>
                          </>
                        ) : selectedStatsTab === "Top Albums" ? (
                          <>
                            <th className="py-2 px-4 text-left">Album</th>
                            <th className="py-2 px-4 text-left">Artist</th>
                            <th className="py-2 px-4 text-right">Plays</th>
                          </>
                        ) : (
                          <>
                            <th className="py-2 px-4 text-left">Track</th>
                            <th className="py-2 px-4 text-left">Artist</th>
                            {selectedStatsTab === "Last Played" ? (
                              <th className="py-2 px-4 text-right">Played</th>
                            ) : (
                              <>
                                <th className="py-2 px-4 text-right">Plays</th>
                                <th className="py-2 px-4 text-right">Duration</th>
                              </>
                            )}
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {statsData.map((item: any, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-2 px-4">{index + 1}</td>
                          {selectedStatsTab === "Top Artists" ? (
                            <>
                              <td className="py-2 px-4">{item.name}</td>
                              <td className="py-2 px-4">{item.topTrack}</td>
                              <td className="py-2 px-4 text-right">{item.topTrackPlays}</td>
                              <td className="py-2 px-4 text-right">{item.playcount}</td>
                            </>
                          ) : selectedStatsTab === "Top Albums" ? (
                            <>
                              <td className="py-2 px-4">{item.name}</td>
                              <td className="py-2 px-4">{item.artist}</td>
                              <td className="py-2 px-4 text-right">{item.playcount}</td>
                            </>
                          ) : (
                            <>
                              <td className="py-2 px-4">{item.name}</td>
                              <td className="py-2 px-4">{item.artist}</td>
                              {selectedStatsTab === "Last Played" ? (
                                <td className="py-2 px-4 text-right">
                                  {item.lastPlayed === 'Now Playing' || !item.lastPlayed
                                    ? 'Now Playing'
                                    : format(parseISO(item.lastPlayed), 'MMM d, h:mm a')}
                                </td>
                              ) : (
                                <>
                                  <td className="py-2 px-4 text-right">{item.playcount}</td>
                                  <td className="py-2 px-4 text-right">
                                    {typeof item.duration === 'number' ? `${item.duration} min` : item.duration}
                                  </td>
                                </>
                              )}
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <Water />
    </motion.div>
  );
};

export default JamPage;