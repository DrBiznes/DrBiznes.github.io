import { useState, useEffect } from 'react';

interface Track {
  name: string;
  artist: string;
}

const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY;
const LASTFM_USERNAME = 'bob10234';
const SPOTIFY_PROFILE = 'https://open.spotify.com/user/bob10234?si=394e0893e56d47e3';

export const NowPlaying = () => {
  const [lastTrack, setLastTrack] = useState<Track | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastTrack = async () => {
      try {
        console.log('Fetching last track...');
        console.log('API Key:', LASTFM_API_KEY);
        
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
        );
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        console.log('LastFM Response:', data);
        
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

  return (
    <div className="fixed top-4 right-4 text-white font-mono z-[100] p-2 rounded max-w-[800px]">
      {error ? (
        'Failed to load track info'
      ) : !lastTrack ? (
        'Loading...'
      ) : (
        <div className="flex flex-row flex-wrap items-center justify-end gap-x-2">
          <div className="whitespace-nowrap">Jam JUST listened to</div>
          <a 
            href={SPOTIFY_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors text-right"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              maxWidth: '400px',
            }}
          >
            [{lastTrack.name} - {lastTrack.artist}]
          </a>
        </div>
      )}
    </div>
  );
}; 