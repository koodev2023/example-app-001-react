// _id 6654bcace035fca1e09bbedb
// imdbId "tt0499549"
// title "Avatar"
// releaseDate "2009-12-15"
// trailerLink "https://www.youtube.com/watch?v=5PSNL1qE6VY"
// genres Array (4)
// poster "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
// backdrops Array (10)
// reviewIds Array (empty)

interface Movie {
  _id: string;
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  genres: string[];
  poster: string;
  backdrops: string[];
  reviewIds: string[];
}
