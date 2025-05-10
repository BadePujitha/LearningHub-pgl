import "./VideoCard.css";

const VideoCard = ({ title, videoId }) => {
  return (
    <div className="video-card">
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <button className="enroll-btn">Enroll Now</button>
    </div>
  );
};

export default VideoCard;