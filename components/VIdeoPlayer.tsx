import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      width="100%"
      height="30rem"
      src="/college-tour.mp4"
      controls={true}
      autoPlay={true}
      muted={true}
    />
  );
};

export default VideoPlayer;
