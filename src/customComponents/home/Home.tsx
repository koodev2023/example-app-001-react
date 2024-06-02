import Hero from "../hero/Hero";

const Home = ({
  movies,
  isLoading,
}: {
  movies: Movie[];
  isLoading: boolean;
}) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col w-full h-full items-center justify-center">
          Loading...
        </div>
      ) : (
        <Hero movies={movies} />
      )}
    </div>
  );
};

export default Home;
