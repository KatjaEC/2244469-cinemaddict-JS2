export const filters = [
    {
        title: 'All movies',
        counter: '',
        href: '#all',
        classMods: 'main-navigation__item--active',
    },
    {
        title: 'Watchlist',
        counter: '13',
        href: '#watchlist',
        classMods: '',
    },
    {
        title: 'History',
        counter: '4',
        href: '#history',
        classMods: '',
    },
    {
        title: 'Favorites',
        counter: '8',
        href: '#favorites',
        classMods: '',
    },
];

export const sortingOptions = [
    {
        title: 'Sort by default',
        classMods: 'sort__button--active',
    },
    {
        title: 'Sort by date',
        classMods: '',
    },
    {
        title: 'Sort by rating',
        classMods: '',
    },
];

export const movies = [
    {
        id: '1',
        movieInfo: {
            title: 'The Dance of Life',
            altTitle: '',
            rating: '8.3',
            image: './images/posters/the-dance-of-life.jpg',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '115',
            genres: ['Musical'],
            year: '1929', // FOR NOW
            description: 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
        },
        commentsCount: 5,
        comments: [1, 2, 3, 4, 5],
    },
    {
        id: '2',
        movieInfo: {
            title: 'Sagebrush Trail',
            altTitle: '',
            rating: '3.2',
            image: './images/posters/sagebrush-trail.jpg',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '54',
            genres: ['Western'],
            year: '1933', // FOR NOW
            description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
        },
        // title: 'Sagebrush Trail',
        // rating: '3.2',
        // year: '1933',
        // genre: 'Western',
        // runtime: '54',
        // image: './images/posters/sagebrush-trail.jpg',
        // description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
        commentsCount: 89,
        comments: [],
    },
    {
        id: '3',
        movieInfo: {
            title: 'The Man with the Golden Arm',
            altTitle: '',
            rating: '9.0',
            image: './images/posters/the-man-with-the-golden-arm.jpg',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '119',
            genres: ['Drama'],
            year: '1955', // FOR NOW
            description: 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
        },        
        // title: 'The Man with the Golden Arm',
        // rating: '9.0',
        // year: '1955',
        // genre: 'Drama',
        // runtime: '1h 59m',
        // image: './images/posters/the-man-with-the-golden-arm.jpg',
        // description: 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
        commentsCount: 18,
        comments: [],
    },
    {
        id: '4',
        movieInfo: {
            title: 'Santa Claus Conquers the Martians',
            altTitle: '',
            rating: '2.3',
            image: './images/posters/santa-claus-conquers-the-martians.jpg',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '81',
            genres: ['Comedy'],
            year: '1964', // FOR NOW
            description: 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
        },        
        // title: 'Santa Claus Conquers the Martians',
        // rating: '2.3',
        // year: '1964',
        // genre: 'Comedy',
        // runtime: '1h 21m',
        // image: './images/posters/santa-claus-conquers-the-martians.jpg',
        // description: 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
        commentsCount: 465,
        comments: [],
    },
    {
        id: '5',
        movieInfo: {
            title: 'Popeye the Sailor Meets Sindbad the Sailor',
            altTitle: '',
            rating: '6.3',
            image: './images/posters/popeye-meets-sinbad.png',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '16',
            genres: ['Cartoon'],
            year: '1936', // FOR NOW
            description: 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',
        },
        // title: 'Popeye the Sailor Meets Sindbad the Sailor',
        // rating: '6.3',
        // year: '1936',
        // genre: 'Cartoon',
        // runtime: '16m',
        // image: './images/posters/popeye-meets-sinbad.png',
        // description: 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',
        commentsCount: 0,
        comments: [],
    },
    {
        id: '6',
        movieInfo: {
            title: 'The Great Flamarion',
            altTitle: '',
            rating: '8.9',
            image: './images/posters/the-great-flamarion.jpg',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '78',
            genres: ['Mystery'],
            year: '1945', // FOR NOW
            description: 'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…',
        },
        // title: 'The Great Flamarion',
        // rating: '8.9',
        // year: '1945',
        // genre: 'Mystery',
        // runtime: '1h 18m',
        // image: './images/posters/the-great-flamarion.jpg',
        // description: 'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…',
        commentsCount: 12,
        comments: [],
    },
    {
        id: '7',
        movieInfo: {
            title: 'Made for Each Other',
            altTitle: '',
            rating: '5.8',
            image: './images/posters/made-for-each-other.png',
            director: '',
            writers: [],
            actors: [],
            releaseDate: '',
            releaseCountry: '',
            runtime: '92',
            genres: ['Comedy'],
            year: '1939', // FOR NOW
            description: 'John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…',
        },
        // title: 'Made for Each Other',
        // rating: '5.8',
        // year: '1939',
        // genre: 'Comedy',
        // runtime: '1h 32m',
        // image: './images/posters/made-for-each-other.png',
        // description: 'John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…',
        commentsCount: 56,
        comments: [],
    },
];
