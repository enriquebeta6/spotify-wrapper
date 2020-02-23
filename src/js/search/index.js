import dotenv from 'dotenv';

dotenv.config();

export const search = (query, type) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`,
    },
  };

  const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;

  return fetch(endpoint, config).then((res) => res.json());
};

export const searchAlbums = (query) => search(query, 'album');

export const searchArtists = (query) => search(query, 'artist');

export const searchTracks = (query) => search(query, 'track');

export const searchPlaylists = (query) => search(query, 'playlist');
