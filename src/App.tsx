import { useEffect, useState } from "react";
import api from "./api/axiosConfig";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./customComponents/home/Home";
import Header from "./customComponents/header/Header";
import Trailer from "./customComponents/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Home movies={movies} isLoading={isLoading} />}
          />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
        </Route>
      </Routes>

      {/* <div>Example App with Spring Boot and React</div>
      {isLoading ? <div>Loading...</div> : <div>{JSON.stringify(movies)}</div>} */}
    </div>
  );
}

export default App;
