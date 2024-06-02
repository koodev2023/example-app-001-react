import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className="w-full aspect-video">
      {key !== null ? (
        <ReactPlayer
          width={"100%"}
          controls
          playing
          url={`https://www.youtube.com/watch?v=${key}`}
        />
      ) : (
        <div>Link not available</div>
      )}
    </div>
  );
};

export default Trailer;
