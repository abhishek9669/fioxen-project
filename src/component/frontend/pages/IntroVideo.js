import React from "react";

export default function IntroVideo() {
  return (
    <>
      <section className="intro-video">
        <div
          className="intro-wrapper-one bg_cover pt-115"
          style={{ backgroundImage: "url(assets/images/bg/video-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="play-content play-content-one text-center">
                  <a
                    href="https://www.youtube.com/watch?v=lJyzByVH1oQ"
                    className="video-popup"
                  >
                    <i className="flaticon-play-button" />
                  </a>
                  <h5>Play Video</h5>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="intro-content-box intro-content-box-one">
                  <div className="section-title section-title-left section-title-white mb-35">
                    <span className="sub-title">Checkout List</span>
                    <h2>Professional planners for your vacation</h2>
                  </div>
                  <p>
                    Risus urnas Iaculis per amet vestibulum luctus tincidunt
                    ultricies aenean quam eros eleifend sodales cubilia mattis
                    quam.
                  </p>
                  <a href="listing-grid.html" className="main-btn icon-btn">
                    Explore List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
