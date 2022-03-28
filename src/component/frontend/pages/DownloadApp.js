import React from "react";

export default function DownloadApp() {
  return (
    <>
      <section className="download-app">
        <div className="download-wrapper-one pt-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="app-img">
                  <img src="assets/images/app-1.png" alt="App Image" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="download-content-box download-content-box-one">
                  <div className="section-title section-title-left mb-25">
                    <span className="sub-title">Downlaod App</span>
                    <h2>Comprehnsive All Great Destination Here</h2>
                  </div>
                  <p>
                    Dictumst integer tellus eros quam vestibulum ante tortor
                    mollis adipisn pharetra curae curae and pulvinar porttitor
                  </p>
                  <ul className="button">
                    <li>
                      <a href="index.html" className="app-btn">
                        <div className="icon">
                          <i className="ti-android" />
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>Goole Play</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="app-btn">
                        <div className="icon">
                          <i className="ti-apple" />
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="counter-area pt-120">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="counter-item counter-item-one">
                          <div className="info">
                            <h4>
                              <span>Member</span>Professional
                            </h4>
                            <h3>
                              <span className="count">220</span> +
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="counter-item counter-item-one">
                          <div className="info">
                            <h4>
                              <span>Listing</span>Received
                            </h4>
                            <h3>
                              <span className="count">72</span>K +
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="counter-item counter-item-one">
                          <div className="info">
                            <h4>
                              <span>Client</span>Satisfaction
                            </h4>
                            <h3>
                              <span className="count">50</span>K +
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
