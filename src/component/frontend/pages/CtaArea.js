import React from "react";

export default function CtaArea() {
  return (
    <>
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{ backgroundImage: "url(assets/images/bg/cta-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="company-name">Fioxen</div>
              </div>
              <div className="col-lg-5">
                <div className="cta-content-box">
                  <h2>Visit the Best Places</h2>
                  <p>
                    Pharetra venenatis ante pulvinar fermentum dignissim one
                    malesuada laoreet ridiculus fringilla quam
                  </p>
                  <a href="listing-grid.html" className="main-btn icon-btn">
                    Explore Now
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
