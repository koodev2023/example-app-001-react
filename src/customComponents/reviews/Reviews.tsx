import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";
import { Loader2, UserRound } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Reviews = ({
  getMovieData,
  movie,
  reviews,
  setReviews,
}: {
  getMovieData: (movieId: string) => Promise<void>;
  movie: IMovie | undefined;
  reviews: IReview[] | undefined;
  setReviews: React.Dispatch<React.SetStateAction<IReview[]>>;
}) => {
  const params = useParams();
  const movieId = params.movieId;
  const reviewsEndRef = useRef<HTMLDivElement>(null);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  useEffect(() => {
    getMovieData(movieId!);
  }, []);

  const addReview = async ({ reviewText }: { reviewText: string }) => {
    try {
      setIsSubmittingReview(true);

      console.log("reviewText:", reviewText);
      console.log("movieId:", movieId);

      const response = await api.post("/api/v1/reviews", {
        reviewBody: reviewText,
        imdbId: movieId,
      });

      console.log(JSON.stringify(response));
      console.log(response.config);
      console.log(response.data);

      const updatedReviews = [...reviews!, { _id: "fakeId", body: reviewText }];

      setReviews(updatedReviews);

      setIsSubmittingReview(false);

      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold leading-tight">Review</h3>

        <div className="flex max-sm:flex-col flex-row sm:gap-8">
          <div className="flex flex-col">
            {movie ? (
              <img src={movie?.poster} alt="poster" />
            ) : (
              <Loader2 size="40" className="animate-spin" />
            )}
          </div>

          <div
            className="flex flex-col gap-2 px-5 max-sm:pt-2 pb-2 w-3/5 max-sm:w-full"
            ref={reviewsEndRef}
          >
            <ReviewForm
              handleSubmit={addReview}
              labelText="Write a Review"
              defaultValues={{ body: "" }}
              isSubmittingReview={isSubmittingReview}
            />
            <ScrollArea className="hidden sm:block rounded-md border px-2 py-1 sm:h-[360px]">
              {reviews?.length === 0
                ? "Write a comment!"
                : reviews?.map((review, index) => {
                    return (
                      <div key={`scrollable ${index}`}>
                        <div className="flex flex-row gap-1">
                          <UserRound />
                          <p>:</p>
                          <p>{review.body}</p>
                        </div>
                        <Separator className="my-0.5" />
                      </div>
                    );
                  })}
            </ScrollArea>

            <div className="block sm:hidden px-2 py-1">
              {reviews?.length === 0
                ? "Write a comment!"
                : reviews?.map((review, index) => {
                    return (
                      <div key={`no scroll ${index}`}>
                        <div className="flex flex-row gap-1">
                          <UserRound />
                          <p>:</p>
                          <p>{review.body}</p>
                        </div>
                        <Separator className="my-0.5" />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        <div ref={reviewsEndRef}></div>
      </div>
    </>
  );
};

export default Reviews;
