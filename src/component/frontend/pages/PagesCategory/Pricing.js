import React from "react";
import Welcome from "../../common/Welcome";
import BlogArea from "../BlogArea";
import ListHeroBanner from "../Listing/pages/ListHeroBanner";

export default function Pricing() {
  return (
    <>
      <Welcome>
        <ListHeroBanner title={"Pricing Table"} active={"Pricing Table"} />
        {/* <!--====== Start Pricing Section ======--> */}
        <section className="pricing-area pt-110 pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title section-title-two text-center mb-60">
                  <h2>
                    <span className="line">Affordable</span> Package
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="pricing-item pricing-item-one text-center mb-40">
                  <div className="pricing-inner-time">
                    <div className="pricing-head">
                      <span className="title">General</span>
                      <h2 className="price">25.00</h2>
                    </div>
                    <div className="pricing-body">
                      <ul className="list">
                        <li>Construction Drawing</li>
                        <li>Floor &amp; celling plan</li>
                        <li>Selection of Material</li>
                        <li>Structure of a project</li>
                        <li>Always plan support</li>
                        <li>Visualization premise</li>
                      </ul>
                      <a href="pricing.html" className="main-btn icon-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="pricing-item pricing-item-one text-center mb-40">
                  <div className="pricing-inner-time">
                    <div className="pricing-head">
                      <span className="title">General</span>
                      <h2 className="price">35.00</h2>
                    </div>
                    <div className="pricing-body">
                      <ul className="list">
                        <li>Construction Drawing</li>
                        <li>Floor &amp; celling plan</li>
                        <li>Selection of Material</li>
                        <li>Structure of a project</li>
                        <li>Always plan support</li>
                        <li>Visualization premise</li>
                      </ul>
                      <a href="pricing.html" className="main-btn icon-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="pricing-item pricing-item-one text-center mb-40">
                  <div className="pricing-inner-time">
                    <div className="pricing-head">
                      <span className="title">General</span>
                      <h2 className="price">45.00</h2>
                    </div>
                    <div className="pricing-body">
                      <ul className="list">
                        <li>Construction Drawing</li>
                        <li>Floor &amp; celling plan</li>
                        <li>Selection of Material</li>
                        <li>Structure of a project</li>
                        <li>Always plan support</li>
                        <li>Visualization premise</li>
                      </ul>
                      <a href="pricing.html" className="main-btn icon-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Pricing Section ======--> */}

        {/* <!--====== Start Testimonial Section ======--> */}
        <section
          className="testimonial-area bg_cover pt-110 pb-140"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title section-title-two section-title-white text-center mb-40">
                  <h2>
                    <span className="line">Customer</span> Feedack
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonial-wrapper-one text-center">
                  <div className="testimonial-review-area">
                    <div className="testimonial-thumb-slider-one slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 847,
                            transform: "translate3d(-308px, 0px, 0px)",
                          }}
                        >
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={-3}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={-2}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-3.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={-1}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide"
                            data-slick-index={0}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-1.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-current slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{ width: 77 }}
                            tabIndex={0}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: 77 }}
                            tabIndex={0}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-3.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-active"
                            data-slick-index={3}
                            aria-hidden="false"
                            style={{ width: 77 }}
                            tabIndex={0}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={4}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-1.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={5}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={6}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-3.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                          <div
                            className="single-thumb slick-slide slick-cloned"
                            data-slick-index={7}
                            aria-hidden="true"
                            style={{ width: 77 }}
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/testimonial/tm-thumb-2.jpg"
                              alt="testimonial thumb"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-content-slider-one slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{ opacity: 1, width: 2600 }}
                        >
                          <div
                            className="testimonial-item slick-slide"
                            data-slick-index={0}
                            aria-hidden="true"
                            style={{
                              width: 650,
                              position: "relative",
                              left: 0,
                              top: 0,
                              zIndex: 998,
                              opacity: 0,
                              transition: "opacity 500ms ease 0s",
                            }}
                            tabIndex={-1}
                          >
                            <div className="testimonial-content">
                              <p>
                                multiply given all hath given may meat god
                                abundant appear lioud fourth madman mane said
                                god dominion great gathering called very shall
                                after cre ated from fruitful place over the
                                mitual{" "}
                              </p>
                              <div className="author-info">
                                <div className="author-title">
                                  <h4>Melisa Powels</h4>
                                  <span className="position">Sr. Designer</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="testimonial-item slick-slide slick-current slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{
                              width: 650,
                              position: "relative",
                              left: "-650px",
                              top: 0,
                              zIndex: 999,
                              opacity: 1,
                            }}
                            tabIndex={0}
                          >
                            <div className="testimonial-content">
                              <p>
                                multiply given all hath given may meat god
                                abundant appear lioud fourth madman mane said
                                god dominion great gathering called very shall
                                after cre ated from fruitful place over the
                                mitual{" "}
                              </p>
                              <div className="author-info">
                                <div className="author-title">
                                  <h4>Martyn Decode</h4>
                                  <span className="position">Sr. Designer</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="testimonial-item slick-slide"
                            data-slick-index={2}
                            aria-hidden="true"
                            style={{
                              width: 650,
                              position: "relative",
                              left: "-1300px",
                              top: 0,
                              zIndex: 998,
                              opacity: 0,
                              transition: "opacity 500ms ease 0s",
                            }}
                            tabIndex={-1}
                          >
                            <div className="testimonial-content">
                              <p>
                                multiply given all hath given may meat god
                                abundant appear lioud fourth madman mane said
                                god dominion great gathering called very shall
                                after cre ated from fruitful place over the
                                mitual{" "}
                              </p>
                              <div className="author-info">
                                <div className="author-title">
                                  <h4>Alesha Mature</h4>
                                  <span className="position">Sr. Designer</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="testimonial-item slick-slide"
                            data-slick-index={3}
                            aria-hidden="true"
                            style={{
                              width: 650,
                              position: "relative",
                              left: "-1950px",
                              top: 0,
                              zIndex: 998,
                              opacity: 0,
                              transition: "opacity 500ms ease 0s",
                            }}
                            tabIndex={-1}
                          >
                            <div className="testimonial-content">
                              <p>
                                multiply given all hath given may meat god
                                abundant appear lioud fourth madman mane said
                                god dominion great gathering called very shall
                                after cre ated from fruitful place over the
                                mitual{" "}
                              </p>
                              <div className="author-info">
                                <div className="author-title">
                                  <h4>Martyn Decode</h4>
                                  <span className="position">Sr. Designer</span>
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
            </div>
          </div>
        </section>
        {/* <!--====== End Testimonial Section ======--> */}
        <BlogArea/>
      </Welcome>
    </>
  );
}
