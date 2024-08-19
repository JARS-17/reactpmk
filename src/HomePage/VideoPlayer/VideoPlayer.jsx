import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-student.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const closePlayer = (e) => {
      if(e.target === player.current){
        setPlayState(false);
      }
    };

  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
