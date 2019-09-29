import { expect } from 'chai';

import { 
  search, 
  searchAlbums, 
  searchArtists, 
  searchTracks, 
  searchPlaylists 
} from '../js/search';

describe('Spotify Wrapper API', () => {
  describe('Smoke Tests', () => {
    it('Should exist search method', () => {
      expect(search).to.exist;
    });
    
    it('Should exist searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('Should exist searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exist searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exist searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
