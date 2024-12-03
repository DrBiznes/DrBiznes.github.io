import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

interface Track {
  name: string;
  artist: string;
}

const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY;
const LASTFM_USERNAME = 'bob10234';

export const NowPlaying = () => {
  const [lastTrack, setLastTrack] = useState<Track | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastTrack = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        const track = data.recenttracks.track[0];
        
        setLastTrack({
          name: track.name,
          artist: track.artist['#text']
        });
      } catch (err) {
        setError('Failed to load track info');
        console.error('LastFM Error:', err);
      }
    };

    fetchLastTrack();
    const interval = setInterval(fetchLastTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  const trackText = lastTrack ? `[${lastTrack.name} - ${lastTrack.artist}]` : '';

  return (
    <Link 
      to="/jam"
      className="fixed top-4 right-4 z-[100] bg-white/10 backdrop-blur-sm text-white font-['IBM_Plex_Mono'] 
        hover:bg-white/20 transition-all duration-300 rounded-lg overflow-hidden border border-white/20"
    >
      <div className="px-6 py-3">
        <div className="flex flex-col items-end gap-y-1">
          <div className="text-sm opacity-70">Jam JUST listened to</div>
          <div className="overflow-hidden relative w-[200px]">
            {error ? (
              <span className="text-red-400">Failed to load track info</span>
            ) : !lastTrack ? (
              <span>Loading...</span>
            ) : (
              <Marquee gradient={false} speed={50}>
                {trackText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Marquee>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}; 