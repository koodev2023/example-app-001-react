import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";

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
  // if (!movie) {
  //   return <div>Movie not found</div>;
  // }

  // if (!reviews) {
  //   return <div>Reviews not found</div>;
  // }

  const params = useParams();
  const movieId = params.movieId;

  console.log(`Movie ID 123: ${movieId}`);

  useEffect(() => {
    console.log(`Movie ID: ${movieId}`);

    getMovieData(movieId!);
  }, []);

  const addReview = async ({ reviewText }: { reviewText: string }) => {
    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: reviewText,
        imdbId: movieId,
      });

      console.log(`Response: ${response.config.data}`);

      const updatedReviews = [...reviews!, { _id: "fakeId", body: reviewText }];

      setReviews(updatedReviews);
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
            <img src={movie?.poster} alt="poster" />
          </div>

          <div className="flex flex-col">
            <ReviewForm
              handleSubmit={addReview}
              labelText="Write a Review"
              defaultValues={{ body: "" }}
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
