import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./customComponents/home/Home";
import Header from "./customComponents/header/Header";
import Trailer from "./customComponents/trailer/Trailer";
import Reviews from "./customComponents/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState<IMovie>();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data as IMovie;

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Home movies={movies} isLoading={isLoading} />}
          />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
