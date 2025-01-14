import { Loader2 } from "lucide-react";
import Hero from "../hero/Hero";

const Home = ({
  movies,
  isLoading,
}: {
  movies: IMovie[];
  isLoading: boolean;
}) => {
  return (
    <div className="w-full max-w-5xl">
      {isLoading ? (
        <div className="flex flex-col w-full min-h-[calc(100vh-80px)] items-center justify-center">
          <Loader2 size="40" className="animate-spin" />
        </div>
      ) : (
        <Hero movies={movies} />
      )}
    </div>
  );
};

export default Home;
