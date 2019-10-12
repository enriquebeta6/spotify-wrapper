const mockResponse = {
  artists: {
    href: 'https://api.spotify.com/v1/search?query=Incubus&type=artist&market=BR&offset=0&limit=20',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za',
        },
        followers: {
          href: null,
          total: 1990275,
        },
        genres: [
          'alternative metal',
          'alternative rock',
          'funk metal',
          'funk rock',
          'modern rock',
          'nu metal',
          'pop rock',
          'post-grunge',
          'rap rock',
          'rock',
        ],
        href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
        id: '3YcBF2ttyueytpXtEzn1Za',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/90fade273f93f40b939dfad8cf6f3d0553fc0e6e',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/4fa04c49d629c3219c38ffea09bf0b7eb8603a35',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/db10ee9e957676b0d51c4e242a0c7cb77702df34',
            width: 160,
          },
        ],
        name: 'Incubus',
        popularity: 71,
        type: 'artist',
        uri: 'spotify:artist:3YcBF2ttyueytpXtEzn1Za',
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 6,
  },
};

export default { mockResponse };
