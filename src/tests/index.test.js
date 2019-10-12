import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetch from 'isomorphic-fetch';

import { 
  search, 
  searchAlbums, 
  searchArtists, 
  searchTracks, 
  searchPlaylists 
} from '../js/search';


import { mockResponse } from '../js/search/mockResponse';

chai.use(sinonChai);

global.fetch = fetch;

describe('Spotify Wrapper API', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    
    fetchedStub.resolves({ json: () => (mockResponse) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

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

  describe('Generic Search', () => {
    it('should call fetch fuction', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
  
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        
        const albums = search('Incubus', 'album');
        
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
      
      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      });
    })

    it('should return JSON Data from the Promise', () => {
      const artists = search('Incubus', 'artist');

      artists.then(data => {
        expect(data).to.be.eql(mockResponse)
      })
    })
  });

  describe('Search Artist', () => {
    it('should call fetch function', () => {
      const artist = searchArtists('Incubus') ;

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const artist = searchArtists('Incubus') ;

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const album = searchAlbums('Incubus') ;

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const album = searchAlbums('Incubus') ;

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus') ;

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const tracks = searchTracks('Incubus') ;

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus') ;

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const playlists = searchPlaylists('Incubus') ;

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });
});
