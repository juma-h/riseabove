import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./intro.css";
import "./intro.scss";
import playIcon from "../../Assets/Images-20230412T100529Z-001/Images/Play-Icon_1.png";
import thumbnail from "../../Assets/Images-20230412T100529Z-001/Images/video-capture-5603.png";

function Intro() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    console.log("clicked play");
    setVideoModalOpen(true);
  };

  return (
    <div className="intro-main">
      <div className="empty-div"></div>

      <div className="video-foreground">
        {/* <img
          src={thumbnail}
          alt="thumbnail"
          style={{ height: "100%", width: "100%" }}
        /> */}
      </div>
      <div className="content d-flex flex-row m-5 p-5">
        <div className="intro-content w-50">
          <h2 className="intro-h2">Organizational Performance</h2>

          <h4 className="intro-h1">Driven By People</h4>
          <p className="intro-p">
            Imagine a resilient workforce that constantly adapts to and shapes
            its environment. An organization that engages its employees and
            gives them purpose, mission, and value alignment. Leaders who are
            accountable and inspire organizational performance. An organization
            where diversity and inclusion are the fabric of success.
          </p>
          <div style={{ float: "center", marginTop: "80px" }}>
            <div className="play-icon-left" />
            <a className="link-a" style={{ marginLeft: "-20em" }}>
              Book Now
            </a>
          </div>
        </div>
        <div className="intro-content-right w-50">
          <div className="icon-right"></div>
          <i class="fas fa-play fa-2xl play-icon-right" onClick={openVideoModal}></i>
        </div>
      </div>

      <div>
        <i
          className="fas fa-chevron-down scroll-down-link scroll-down-arrow"
          style={{ fontSize: "3em", color: "white", height: "3em" }}
        ></i>
      </div>

      {videoModalOpen && (
        <div className="video-modal">
          <YouTube
            videoId="qCoU3gh_UFc"
            onReady={(event) => event.target.playVideo()}
          />
          <button
            className="close-btn"
            onClick={() => setVideoModalOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
export default Intro;
