import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Hero = ({ movies }: { movies: IMovie[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [myDuration, setMyDuration] = useState(2500);

  const navigate = useNavigate();

  function reviews(movieId: string) {
    navigate(`/reviews/${movieId}`);
  }

  // IDEA: randomize backdrop images
  // ISSUE: make fast scrolling very laggy
  // const [oddBackdropIndex, setOddBackdropIndex] = useState(0);
  // const [evenBackdropIndex, setEvenBackdropIndex] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      // console.log(`select: ${api.selectedScrollSnap()}`);

      // IDEA: randomize backdrop images
      // ISSUE: make fast scrolling very laggy
      // if (api.selectedScrollSnap() % 2 === 0) {
      //   setEvenBackdropIndex(Math.floor(Math.random() * 10));
      // } else {
      //   setOddBackdropIndex(Math.floor(Math.random() * 10));
      // }

      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function onDotClick(index: number): void {
    api?.scrollTo(index);
  }

  return (
    <div
      onMouseLeave={() => setMyDuration(2500)}
      onMouseEnter={() => setMyDuration(60000)}
      className="flex flex-col gap-5 items-center justify-center max-sm:w-screen max-w-5xl sm:mt-10"
    >
      <Carousel
        plugins={[Autoplay({ delay: myDuration })]}
        className="w-full max-w-5xl"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {movies.map((mov, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col max-sm:gap-5 gap-2 items-center justify-center w-full relative">
                <img src={mov.backdrops[0]} className="opacity-70 w-full" />

                <div className="sm:absolute flex flex-row max-sm:flex-col gap-2 sm:left-[10%] bottom-1.5 max-sm:top-[10%] items-end max-sm:items-center">
                  <img
                    src={mov.poster}
                    className="max-sm:w-1/3 w-1/5 left-[10%] border-[1.5px] border-blue-100 rounded-md"
                  />
                  <div className="w-fit text-black font-extrabold max-sm:text-center rounded-md px-1.5 py-0.5 sm:bg-white/70 sm:border-black sm:border-[1px]">
                    {mov.title}
                  </div>
                </div>

                <div className="flex flex-row gap-2 sm:absolute right-[5%] max-sm:right-[5%] bottom-3 max-sm:bottom-[5%] text-2xl max-sm:text-sm">
                  <button className=" bg-blue-800 rounded-full p-3.5 max-sm:p-2">
                    <Link
                      to={`/trailer/${mov.trailerLink.substring(
                        mov.trailerLink.length - 11
                      )}`}
                    >
                      <FaPlay className="text-gray-200" />
                    </Link>
                  </button>

                  <button
                    className="right-[20%] max-sm:right-[5%] bottom-3 max-sm:bottom-[5%] bg-blue-800 rounded-md py-0.5 px-2 max-sm:p-1 text-white"
                    onClick={() => reviews(mov.imdbId)}
                  >
                    Reviews
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:absolute left-1.5 top-1/2 opacity-40 hover:opacity-80" />
        <CarouselNext className="sm:absolute right-1.5 top-1/2 opacity-40 hover:opacity-80" />
      </Carousel>
      <div className="flex flex-row items-center justify-center">
        {Array.from({ length: movies.length }).map((_, index) => (
          <div key={index}>
            <GoDotFill
              onClick={() => onDotClick(index)}
              className={`${
                index === current - 1
                  ? "fill-foreground/75"
                  : "fill-foreground/25 hover:cursor-pointer hover:fill-foreground/40"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
