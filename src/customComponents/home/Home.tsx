import React from "react";
import Hero from "../hero/Hero";

const Home = ({ movies }: { movies: Movie[] }) => {
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;
