import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";
import { Loader2 } from "lucide-react";

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
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <h3>Review</h3>

        <div className="flex max-sm:flex-col flex-row">
          <div className="flex flex-col">
            {movie ? (
              <img src={movie?.poster} alt="poster" />
            ) : (
              <Loader2 size="40" className="animate-spin" />
            )}
          </div>

          <div className="flex flex-col px-5 py-2">
            <ReviewForm
              handleSubmit={addReview}
              labelText="Write a Review"
              defaultValues={{ body: "" }}
              isSubmittingReview={isSubmittingReview}
            />
            {reviews?.map((review, index) => {
              return (
                <div key={index}>
                  <p>{review.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
