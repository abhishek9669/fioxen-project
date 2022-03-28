import React from "react";
import Welcome from "../../common/Welcome";

export default function ListingDetailTwo() {
  return (
    <>
      <Welcome>
        {/* <!--====== Start breadcrumbs Section ======--> */}
        <section
          className="page-breadcrumbs page-breadcrumbs-two bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/listing-breadcrumbs-1.jpg)",
          }}
        ></section>
        {/* <!--====== End breadcrumbs Section ======--> */}

        {/* <!--====== Start Listing Details Section ======--> */}
        <section className="listing-details-section pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="listing-details-wrapper listing-details-wrapper-two">
                  <div className="listing-info-area mb-30">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="listing-info-content">
                          <ul className="ratings ratings-three">
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li>
                              <span>
                                <a href="#">(02 Reviews)</a>
                              </span>
                            </li>
                          </ul>
                          <h3 className="title">Center Museum</h3>
                          <div className="listing-meta">
                            <ul>
                              <li>
                                <span>
                                  <i className="ti-location-pin"></i>California,
                                  USA
                                </span>
                              </li>
                              <li>
                                <span>
                                  <i className="ti-tablet"></i>
                                  <a href="tel:+982653652-05">
                                    +98 (265) 3652 - 05
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="button">
                          <a href="listing-grid.html" className="icon-btn">
                            <i className="ti-heart"></i>
                          </a>
                          <a href="listing-grid.html" className="icon-btn">
                            <i className="ti-share"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-thumbnail mb-30">
                    <img
                      src="assets/images/listing/listing-single-1.jpg"
                      alt="listing image"
                    />
                  </div>
                  <div className="listing-content mb-30">
                    <h3 className="title">World's Quality Museum</h3>
                    <p>
                      Parturient varius elementum maecenas faucibus maecenas
                      inceptos commodo metus vitae ac pretium magnis. Ridiculus
                      aenean diam duis montes mattis curae dis platea cubilia
                      fames justo nullam per incepto Accumsan mollis, semper
                      nisl nulla per curae ante tellus cursus ut blandit
                      eleifend ut adipiscing fringilla Sociosqu penatibus
                      nascetur senectus, molestie sed habitant adipiscing
                      maecenas ultrices curae sociis mi eros ultrices euismod
                      risus cubilia eget habitasse facilisic
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-credit-card"></i>
                          </div>
                          <div className="info">
                            <h6>Card Payment</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-paint-bucket"></i>
                          </div>
                          <div className="info">
                            <h6>Air-conditioned</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-rss-alt"></i>
                          </div>
                          <div className="info">
                            <h6>Wireless Internet</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-trash"></i>
                          </div>
                          <div className="info">
                            <h6>Serves Alcohol</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-car"></i>
                          </div>
                          <div className="info">
                            <h6>Parking Street</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon-box icon-box-one">
                          <div className="icon">
                            <i className="ti-credit-card"></i>
                          </div>
                          <div className="info">
                            <h6>Outdoor Seating</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Cras vivamus dui cubilia placerat netus lorem vivamus
                      inceptos sollicitudin non inceptos mi dui vulputate donec
                      sed etiam turpis varius a porta natoque nullam tincidunt
                      in nec cubilia hac netus and class pharetra Commodo
                      convallis pharetra tortor facilisis dapibus maecenas nunc
                      nascetur arcu quam vel non varius egestas fusce aced
                      molestie adipiscing curae ante tellus cursus ut blandit
                    </p>
                  </div>
                  <div className="listing-play-box mb-30">
                    <h4 className="title">Documentary</h4>
                    <div
                      className="play-content bg_cover text-center"
                      style={{backgroundImage:"url(assets/images/bg/video-bg-3.jpg)"}}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=lJyzByVH1oQ"
                        className="video-popup"
                      >
                        <i className="flaticon-play-button"></i>
                      </a>
                    </div>
                  </div>
                  <div className="listing-gallery-box mb-30">
                    <h4 className="title">Photo Gallery</h4>
                    <div className="gallery-slider-one slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{opacity:"1", width:"2800px", transform:" translate3d(-1600px, 0px, 0px)"}}
                        >
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="-4"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="-3"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-7.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="-2"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-8.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="-1"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide"
                            data-slick-index="0"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-5.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide"
                            data-slick-index="1"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide"
                            data-slick-index="2"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-7.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-8.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-current slick-active"
                            data-slick-index="4"
                            aria-hidden="false"
                            style={{width:"170px"}}
                            tabIndex="0"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned slick-active"
                            data-slick-index="5"
                            aria-hidden="false"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-5.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned slick-active"
                            data-slick-index="6"
                            aria-hidden="false"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned slick-active"
                            data-slick-index="7"
                            aria-hidden="false"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-7.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="8"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-8.jpg"
                              alt="gallery image"
                            />
                          </div>
                          <div
                            className="gallery-item slick-slide slick-cloned"
                            data-slick-index="9"
                            aria-hidden="true"
                            style={{width:"170px"}}
                            tabIndex="-1"
                          >
                            <img
                              src="assets/images/listing/gallery-6.jpg"
                              alt="gallery image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-tag-box mb-30">
                    <h4 className="title">Popular Tag</h4>
                    <a href="#">Delivery</a>
                    <a href="#">Restaurant</a>
                    <a href="#">Free Internet</a>
                    <a href="#">Shopping</a>
                    <a href="#">Car Parking</a>
                  </div>
                  <div className="listing-rating-box">
                    <h4 className="title">Average Review (10 Reviews)</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-average-rating">
                          <h5 className="title">Service</h5>
                          <div className="single-average-wrap d-flex align-items-center">
                            <div className="progress flex-grow-1">
                              <div
                                className="progress-bar"
                                style={{width:"80%"}}
                              ></div>
                            </div>
                            <span className="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-average-rating">
                          <h5 className="title">Quality</h5>
                          <div className="single-average-wrap d-flex align-items-center">
                            <div className="progress flex-grow-1">
                              <div
                                className="progress-bar"
                                style={{width:"80%"}}
                              ></div>
                            </div>
                            <span className="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-average-rating">
                          <h5 className="title">Location</h5>
                          <div className="single-average-wrap d-flex align-items-center">
                            <div className="progress flex-grow-1">
                              <div
                                className="progress-bar"
                                style={{width:"80%"}}
                              ></div>
                            </div>
                            <span className="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-average-rating">
                          <h5 className="title">Price</h5>
                          <div className="single-average-wrap d-flex align-items-center">
                            <div className="progress flex-grow-1">
                              <div
                                className="progress-bar"
                                style={{width:"80%"}}
                              ></div>
                            </div>
                            <span className="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-review-box mb-50">
                    <h4 className="title">Customer Review</h4>
                    <ul className="review-list">
                      <li className="review">
                        <div className="thumb">
                          <img
                            src="assets/images/listing/review-1.jpg"
                            alt="review image"
                          />
                        </div>
                        <div className="review-content">
                          <h5>Moriana Steve</h5>
                          <span className="date">Sep 02, 2021</span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <div className="content-meta d-flex align-items-center justify-content-between">
                            <ul className="ratings ratings-three">
                              <li>
                                <span className="av-rate">4.5</span>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                            </ul>
                            <a href="#" className="reply">
                              <i className="ti-share-alt"></i>Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="review">
                        <div className="thumb">
                          <img
                            src="assets/images/listing/review-2.jpg"
                            alt="review image"
                          />
                        </div>
                        <div className="review-content">
                          <h5>Moriana Steve</h5>
                          <span className="date">Sep 02, 2021</span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <div className="content-meta d-flex align-items-center justify-content-between">
                            <ul className="ratings ratings-three">
                              <li>
                                <span className="av-rate">4.5</span>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                            </ul>
                            <a href="#" className="reply">
                              <i className="ti-share-alt"></i>Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="review">
                        <div className="thumb">
                          <img
                            src="assets/images/listing/review-3.jpg"
                            alt="review image"
                          />
                        </div>
                        <div className="review-content">
                          <h5>Moriana Steve</h5>
                          <span className="date">Sep 02, 2021</span>
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum verra cubilia ipsum
                            duis amet nullam sit ut ornare mattis urna.{" "}
                          </p>
                          <div className="content-meta d-flex align-items-center justify-content-between">
                            <ul className="ratings ratings-three">
                              <li>
                                <span className="av-rate">4.5</span>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                            </ul>
                            <a href="#" className="reply">
                              <i className="ti-share-alt"></i>Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="listing-review-form mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="title">Write a Review</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="form-rating">
                          <ul className="ratings">
                            <li>
                              <span>Rate Here:</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1"></i>
                            </li>
                          </ul>
                          <span>(02 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form_group">
                            <textarea
                              className="form_control"
                              placeholder="Write Message"
                              name="message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Your name"
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <input
                              type="email"
                              className="form_control"
                              placeholder="Email here"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <div className="single-checkbox d-flex">
                              <input
                                type="checkbox"
                                id="check4"
                                name="checkbox"
                              />
                              <label htmlFor="check4">
                                <span>
                                  Save my name, email, and website in this
                                  browser for the next time i comment.
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <button className="main-btn icon-btn">
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="releted-listing-area">
                  <h3 className="title mb-20">Similar Restaurant</h3>
                  <div className="releted-listing-slider-one slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          width: "3200px",
                          transform: "translate3d(-1200px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-cloned"
                          tabIndex="-1"
                          data-slick-index="-2"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-8.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-dumbbell"></i>
                            </a>
                            <ul className="ratings ratings-three">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                Gym Ground
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-close">close</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-cloned"
                          tabIndex="-1"
                          data-slick-index="-1"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-9.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-government"></i>
                            </a>
                            <span className="featured-btn">Featured</span>
                            <ul className="ratings ratings-five">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                City Palace
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-open">Open</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide"
                          tabIndex="-1"
                          data-slick-index="0"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-7.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-chef"></i>
                            </a>
                            <span className="featured-btn">Featured</span>
                            <ul className="ratings ratings-four">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                Pizza Recipe
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-open">Open</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-current slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-8.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="0">
                              <i className="flaticon-dumbbell"></i>
                            </a>
                            <ul className="ratings ratings-three">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="0">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="0">
                                Gym Ground
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="0">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-close">close</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="0">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="2"
                          aria-hidden="false"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-9.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="0">
                              <i className="flaticon-government"></i>
                            </a>
                            <span className="featured-btn">Featured</span>
                            <ul className="ratings ratings-five">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="0">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="0">
                                City Palace
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="0">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-open">Open</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="0">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-cloned"
                          tabIndex="-1"
                          data-slick-index="3"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-7.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-chef"></i>
                            </a>
                            <span className="featured-btn">Featured</span>
                            <ul className="ratings ratings-four">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                Pizza Recipe
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-open">Open</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-cloned"
                          tabIndex="-1"
                          data-slick-index="4"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-8.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-dumbbell"></i>
                            </a>
                            <ul className="ratings ratings-three">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                Gym Ground
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-close">close</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="listing-item listing-grid-item-two slick-slide slick-cloned"
                          tabIndex="-1"
                          data-slick-index="5"
                          aria-hidden="true"
                        >
                          <div className="listing-thumbnail">
                            <img
                              src="assets/images/listing/listing-grid-9.jpg"
                              alt="Listing Image"
                            />
                            <a href="#" className="cat-btn" tabIndex="-1">
                              <i className="flaticon-government"></i>
                            </a>
                            <span className="featured-btn">Featured</span>
                            <ul className="ratings ratings-five">
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li className="star">
                                <i className="flaticon-star-1"></i>
                              </li>
                              <li>
                                <span>
                                  <a href="#" tabIndex="-1">
                                    (02 Reviews)
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-content">
                            <h3 className="title">
                              <a href="listing-details-1.html" tabIndex="-1">
                                City Palace
                              </a>
                            </h3>
                            <p>Popular restaurant in california</p>
                            <span className="phone-meta">
                              <i className="ti-tablet"></i>
                              <a href="tel:+982653652-05" tabIndex="-1">
                                +98 (265) 3652 - 05
                              </a>
                              <span className="status st-open">Open</span>
                            </span>
                            <div className="listing-meta">
                              <ul>
                                <li>
                                  <span>
                                    <i className="ti-location-pin"></i>
                                    California, USA
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="ti-heart"></i>
                                    <a href="#" tabIndex="-1">
                                      Save
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-widget-area">
                  <div className="widget reservation-form-widget mb-30">
                    <h4 className="widget-title">Reservation</h4>
                    <form>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name"
                          required=""
                        />
                        <i className="ti-user"></i>
                      </div>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone"
                          name="phone"
                          required=""
                        />
                        <i className="ti-mobile"></i>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option data-display="Guest">Guest</option>
                          <option data-display="01">Guest 01</option>
                          <option data-display="02">Guest 02</option>
                          <option data-display="02">Guest 02</option>
                          <option data-display="02">Guest 02</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">Guest</span>
                          <ul className="list">
                            <li
                              data-value="Guest"
                              data-display="Guest"
                              className="option selected"
                            >
                              Guest
                            </li>
                            <li
                              data-value="Guest 01"
                              data-display="01"
                              className="option"
                            >
                              Guest 01
                            </li>
                            <li
                              data-value="Guest 02"
                              data-display="02"
                              className="option"
                            >
                              Guest 02
                            </li>
                            <li
                              data-value="Guest 02"
                              data-display="02"
                              className="option"
                            >
                              Guest 02
                            </li>
                            <li
                              data-value="Guest 02"
                              data-display="02"
                              className="option"
                            >
                              Guest 02
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option data-display="Date">Date</option>
                          <option data-display="01">01.11.2021</option>
                          <option data-display="02">01.11.2021</option>
                          <option data-display="03">01.11.2021</option>
                          <option data-display="04">01.11.2021</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">Date</span>
                          <ul className="list">
                            <li
                              data-value="Date"
                              data-display="Date"
                              className="option selected"
                            >
                              Date
                            </li>
                            <li
                              data-value="01.11.2021"
                              data-display="01"
                              className="option"
                            >
                              01.11.2021
                            </li>
                            <li
                              data-value="01.11.2021"
                              data-display="02"
                              className="option"
                            >
                              01.11.2021
                            </li>
                            <li
                              data-value="01.11.2021"
                              data-display="03"
                              className="option"
                            >
                              01.11.2021
                            </li>
                            <li
                              data-value="01.11.2021"
                              data-display="04"
                              className="option"
                            >
                              01.11.2021
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option data-display="Guest">Time</option>
                          <option data-display="01">08.00AM-10.00AM</option>
                          <option data-display="02">11.00AM-12.00PM</option>
                          <option data-display="03">01.00PM-02.00PM</option>
                          <option data-display="04">02.00PM-03.00PM</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">Guest</span>
                          <ul className="list">
                            <li
                              data-value="Time"
                              data-display="Guest"
                              className="option selected"
                            >
                              Time
                            </li>
                            <li
                              data-value="08.00AM-10.00AM"
                              data-display="01"
                              className="option"
                            >
                              08.00AM-10.00AM
                            </li>
                            <li
                              data-value="11.00AM-12.00PM"
                              data-display="02"
                              className="option"
                            >
                              11.00AM-12.00PM
                            </li>
                            <li
                              data-value="01.00PM-02.00PM"
                              data-display="03"
                              className="option"
                            >
                              01.00PM-02.00PM
                            </li>
                            <li
                              data-value="02.00PM-03.00PM"
                              data-display="04"
                              className="option"
                            >
                              02.00PM-03.00PM
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <button className="main-btn icon-btn">Book Now</button>
                      </div>
                    </form>
                  </div>
                  <div className="widget contact-info-widget mb-30">
                    <div className="contact-info-widget-wrap">
                      <div className="contact-map">
                        <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                        <a href="#" className="support-icon">
                          <i className="flaticon-headphone"></i>
                        </a>
                      </div>
                      <div className="contact-info-content">
                        <h4 className="widget-title">Contact Info</h4>
                        <div className="info-list">
                          <p>
                            <i className="ti-tablet"></i>
                            <a href="tel:+98265365205">+98 (265) 3652 - 05</a>
                          </p>
                          <p>
                            <i className="ti-location-pin"></i>45/A Natura,
                            Barcelona, Spain
                          </p>
                          <p>
                            <i className="ti-email"></i>
                            <a href="mailto:contact@example.com">
                              contact@example.com
                            </a>
                          </p>
                          <p>
                            <i className="ti-world"></i>
                            <a href="www.fioxen.com">www.fioxen.com</a>
                          </p>
                        </div>
                        <ul className="social-link">
                          <li>
                            <a href="#">
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-twitter-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-pinterest"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget business-hour-widget mb-30">
                    <h4 className="widget-title">Business Hour</h4>
                    <ul className="time-info">
                      <li>
                        <span className="day">Monday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Tuesday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Wednesday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Thursday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Friday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Saturday</span>
                        <span className="time">08:00 - 21:00</span>
                      </li>
                      <li>
                        <span className="day">Sunday</span>
                        <span className="time st-close">Close</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget newsletter-widget mb-30">
                    <div
                      className="newsletter-widget-wrap bg_cover"
                      style={{backgroundImage:"url(assets/images/newsletter-widget-1.jpg)"}}
                    >
                      <i className="flaticon-email-1"></i>
                      <h3>Subscribe Our Newsletter</h3>
                      <button className="main-btn icon-btn">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== End Listing Details Section ======--> */}
      </Welcome>
    </>
  );
}
