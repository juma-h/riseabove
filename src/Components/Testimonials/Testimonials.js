import React, { useState } from "react";
import pic5 from "../../Assets/Images-20230412T100529Z-001/Images/Kievette-Sampson.jpg";
import pic6 from "../../Assets/Images-20230412T100529Z-001/Images/donna-odom.jpg";

import YouTube from "react-youtube";
import "./test.css";

export default function Testimonials() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    console.log("clicked play");
    setVideoModalOpen(true);
  };

  const openSecondModal = () => {
    console.log("clicked second video");
    setModalOpen(true);
  };

  return (
    <>
      <div className="container">
        <h1 className="test-header">Testimonials</h1>
        <p class="more-infotest m-5">
          Get inspired by our client stories and why we do what we do.<br></br>{" "}
          You are in good hands with Rise Above Coaching.
        </p>

        <div className="testimonial-main">
          <div className="whole-div p-3">
            <div className="testimonial-content-left w-50">
              <div className="icontest-right"></div>
              <i
                class="fas fa-play fa-2xl testimonial-icon-right"
                onClick={openVideoModal}
                style={{ color: "#F7A81B" }}
              ></i>
            </div>

            <div className="testimonial-cover" style={{ marginTop: "15em" }}>
              <p className="test-p">
                "My experience through Rise Above Coaching taught me time
                management and self-management. So, for me self-management
                required me to evaluate all of my goals and to use my time
                management to achieve them..."
              </p>
              <p className="test-name">Kievette Sampson, Business Consultant</p>
            </div>
          </div>

          <div className="p-5 right-div-testimonial">
            <div className="testimonial-content-right w-50">
              <div className="icontest-left"></div>
              <i
                class="fas fa-play fa-2xl testimonial-icon-left"
                onClick={openSecondModal}
                style={{ color: "#F7A81B" }}
              ></i>
            </div>
            <div className="testimonial-cover">
              <p className="test-p">
                "Through the coaching experience, we explored what was important
                to me, what my options were, what my priorities were and I
                decided that a combination of all three was best for me..."
              </p>
              <p className="test-name">
                Donna Odom, Former Executive Director, Society for History &
                Racial Equity (S.H.A.R.E)
              </p>
            </div>
          </div>
        </div>
      </div>

      {videoModalOpen && (
        <div className="video-modal">
          <YouTube
            videoId="geRNYMVFAtM"
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
      {modalOpen && (
        <div className="video-modal">
          <YouTube
            videoId="xh26oCscIO0"
            onReady={(event) => event.target.playVideo()}
          />
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            X
          </button>
        </div>
      )}
    </>
  );
}
