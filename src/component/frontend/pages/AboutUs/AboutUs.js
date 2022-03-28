import React from "react";
import Welcome from "../../common/Welcome";
import CtaArea from "../CtaArea";
import FeaturesArea from "../FeaturesArea";
import NewsLaterArea from "../NewsLaterArea";
import Team from "../Team";
import Testimonial from "../Testimonial";

export default function AboutUs() {
  return (
    <>
      <Welcome>
        <section className="hero-area">
          <div className="breadcrumbs-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="page-title">
                    <h1 className="title">About us</h1>
                    <ul className="breadcrumbs-link">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">About us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about features area  start*/}

        <section className="features-area">
          <div className="features-wrapper-three pt-110">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center mb-60">
                    <span className="sub-title">Some Feature.</span>
                    <h2>Caring Your Hobbies</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                      <i className="flaticon-add-user" />
                    </div>
                    <div className="content">
                      <h3 className="title">User Friendly</h3>
                      <p>
                        Congue men porttitor blandit erat to loborti lacinia
                        sapien pretium disenty
                      </p>
                      <a href="how-work.html" className="btn-link icon-btn">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                      <i className="flaticon-gift-box" />
                    </div>
                    <div className="content">
                      <h3 className="title">Daily Offers</h3>
                      <p>
                        Congue men porttitor blandit erat to loborti lacinia
                        sapien pretium disenty
                      </p>
                      <a href="how-work.html" className="btn-link icon-btn">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                      <i className="flaticon-laptop" />
                    </div>
                    <div className="content">
                      <h3 className="title">Quick Search</h3>
                      <p>
                        Congue men porttitor blandit erat to loborti lacinia
                        sapien pretium disenty
                      </p>
                      <a href="how-work.html" className="btn-link icon-btn">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                      <i className="flaticon-headphone" />
                    </div>
                    <div className="content">
                      <h3 className="title">Live Support</h3>
                      <p>
                        Congue men porttitor blandit erat to loborti lacinia
                        sapien pretium disenty
                      </p>
                      <a href="how-work.html" className="btn-link icon-btn">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about features area  end*/}
        <FeaturesArea />
        <CtaArea/>
        <Testimonial/>
        <NewsLaterArea/>
        <Team/>
      </Welcome>
    </>
  );
}
