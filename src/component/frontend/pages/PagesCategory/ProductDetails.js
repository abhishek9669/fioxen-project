import React from "react";
import Welcome from "../../common/Welcome";
import ListHeroBanner from "../Listing/pages/ListHeroBanner";

export default function ProductDetails() {
  return (
    <>
      <Welcome>
        <ListHeroBanner title={"Shop Single"} active={"Shop Single"} />
        {/* <!--====== Start Product-details Section ======--> */}
        <section className="product-details-section pt-120 pb-115">
          <div className="container">
            <div className="product-details-wrapper mb-30">
              <div className="row">
                <div className="col-lg-2 col-md-3">
                  <div className="products-thumb-gallery-slider slick-initialized slick-slider slick-vertical">
                    <div
                      className="slick-list draggable"
                      style={{ height: 570 }}
                    >
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          height: 2090,
                          transform: "translate3d(0px, -760px, 0px)",
                        }}
                      >
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={-3}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={-2}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-3.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={-1}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={0}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-1.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-current slick-active"
                          style={{ width: 170 }}
                          tabIndex={0}
                          data-slick-index={1}
                          aria-hidden="false"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-active"
                          style={{ width: 170 }}
                          tabIndex={0}
                          data-slick-index={2}
                          aria-hidden="false"
                        >
                          <img
                            src="assets/images/products/products-thumbs-3.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-active"
                          style={{ width: 170 }}
                          tabIndex={0}
                          data-slick-index={3}
                          aria-hidden="false"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={4}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-1.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={5}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={6}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-3.jpg"
                            alt="products image"
                          />
                        </div>
                        <div
                          className="single-thumb-item slick-slide slick-cloned"
                          style={{ width: 170 }}
                          tabIndex={-1}
                          data-slick-index={7}
                          aria-hidden="true"
                        >
                          <img
                            src="assets/images/products/products-thumbs-2.jpg"
                            alt="products image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="products-big-gallery-slider slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: 2280 }}
                      >
                        <div
                          className="single-gallery-item slick-slide"
                          data-slick-index={0}
                          aria-hidden="true"
                          style={{
                            width: 570,
                            position: "relative",
                            left: 0,
                            top: 0,
                            zIndex: 998,
                            opacity: 0,
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex={-1}
                        >
                          <a
                            href="assets/images/products/products-big-1.jpg"
                            className="img-popup"
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/products/products-big-1.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                        <div
                          className="single-gallery-item slick-slide slick-current slick-active"
                          data-slick-index={1}
                          aria-hidden="false"
                          style={{
                            width: 570,
                            position: "relative",
                            left: "-570px",
                            top: 0,
                            zIndex: 999,
                            opacity: 1,
                          }}
                          tabIndex={0}
                        >
                          <a
                            href="assets/images/products/products-big-1.jpg"
                            className="img-popup"
                            tabIndex={0}
                          >
                            <img
                              src="assets/images/products/products-big-1.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                        <div
                          className="single-gallery-item slick-slide"
                          data-slick-index={2}
                          aria-hidden="true"
                          style={{
                            width: 570,
                            position: "relative",
                            left: "-1140px",
                            top: 0,
                            zIndex: 998,
                            opacity: 0,
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex={-1}
                        >
                          <a
                            href="assets/images/products/products-big-1.jpg"
                            className="img-popup"
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/products/products-big-1.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                        <div
                          className="single-gallery-item slick-slide"
                          data-slick-index={3}
                          aria-hidden="true"
                          style={{
                            width: 570,
                            position: "relative",
                            left: "-1710px",
                            top: 0,
                            zIndex: 998,
                            opacity: 0,
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex={-1}
                        >
                          <a
                            href="assets/images/products/products-big-1.jpg"
                            className="img-popup"
                            tabIndex={-1}
                          >
                            <img
                              src="assets/images/products/products-big-1.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="product-info mt-30">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>(3 Review)</span>
                      </li>
                    </ul>
                    <h3 className="title">Green Energy Saving Light</h3>
                    <span className="price">$25.50</span>
                    <p>
                      Fringilla commodo veli taciti porttitor sempe ma aliquet.
                      Scelerisque montes laoreet aptent socios donec duis donec
                      egestas tempus facilisis congu pretium pellentesque
                      posuere a tempus vele felis nulla posuere eros ultrices
                      non interdum elit prae sent tinc tristique senectus
                    </p>
                    <div className="quantity-cart mb-25">
                      <div className="quantity-input">
                        <div className="quantity-down" id="quantityDown">
                          <i className="ti-minus" />
                        </div>
                        <input id="quantity"
                          type="text"
                          defaultValue={1}
                          name="quantity"
                        />
                        <div className="quantity-up" id="quantityUP">
                          <i className="ti-plus" />
                        </div>
                      </div>
                      <div className="cart-button">
                        <a href="#" className="main-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="product-meta">
                      <a href="#" className="wishlist-btn">
                        Add to Wishlist
                      </a>
                      <span className="variation">
                        <span className="title">Color:</span>
                        <span className="color color-1" />
                        <span className="color color-2" />
                        <span className="color color-3" />
                        <span className="color color-4" />
                      </span>
                      <span className="category">
                        <span className="title">Category:</span>
                        <a href="#">Light</a>,<a href="#">Titan</a>,
                        <a href="#">Plastic</a>
                      </span>
                      <span className="tags">
                        <span className="title">Tags:</span>
                        <a href="#">elcctric</a>,<a href="#">modern</a>,
                        <a href="#">lase</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-wrapper mb-45">
              <div className="row">
                <div className="col-lg-12">
                  <div className="description-tabs">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#description"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#reviews"
                        >
                          Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content mt-30">
                    <div id="description" className="tab-pane fade show active">
                      <div className="description-content-box">
                        <p>
                          Elluse cum orci ultricies turpis nostra ate nunc fames
                          faucibus maecenas blandit habitasse sapien odio
                          elementum etiam tellus feugiat lacinia eget Rhoncus
                          vivamus, netus enim nam. Molestie vehicula class ete
                          enenatis per sociosqu nascetur imperdiet pede amet
                          metus quisque nibh inceptos. In. class magna cond
                          imentum nec. Phasellus consectetuer leo cubilia
                          gravida maecenas. Tempus integer nulla libero euismod
                          arcu. At excelle ridiculus accumsan massa imperdiet
                          vivamus varius nostra nisi nam. Fermentum magnis id
                          leo varius orci, aptent quam parturient tristique
                          commodo porttitor. Curae fermentum nunc penatibus
                          tempor iaculis pulvinar sapien condimentum sociis in
                          velit Fusce aliquet cubilia felis.
                        </p>
                        <p>
                          Eros sodales quis euismod nulla dis facilisis pede
                          posuere ridiculus quisque mattis donec penatibus
                          cubilia aptent est Vestibulum eto torquent posuere
                          lectus lobortis ac pharetra erat quisque tempor
                          euismod semper posuere sodales litora rhoncus Donec
                          ultricies metus elit potenti metus consectetuer. Ace
                          necesity lobortis convallis taciti cubilia ute mauris
                          potenti semper sodales sed iaculis nec imperdiet
                          vivamus.
                        </p>
                      </div>
                    </div>
                    <div id="reviews" className="tab-pane fade">
                      <div className="products-review-wrapper mb-25">
                        <div className="products-review-area mb-45">
                          <h4 className="title">People Reviews</h4>
                          <ul className="review-list">
                            <li className="review">
                              <div className="review-thumb">
                                <img
                                  src="assets/images/products/review-thumb-1.jpg"
                                  alt="review thumb"
                                />
                              </div>
                              <div className="review-content">
                                <h4>John F. Medina</h4>
                                <span className="date">25 May 2021</span>
                                <ul className="ratings ratings-four">
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                </ul>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </div>
                            </li>
                            <li className="review">
                              <div className="review-thumb">
                                <img
                                  src="assets/images/products/review-thumb-2.jpg"
                                  alt="review thumb"
                                />
                              </div>
                              <div className="review-content">
                                <h4>John F. Medina</h4>
                                <span className="date">25 May 2021</span>
                                <ul className="ratings ratings-five">
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                  <li className="star">
                                    <i className="flaticon-star-1" />
                                  </li>
                                </ul>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="products-review-form">
                          <h4 className="title">Leave Your Reviews</h4>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <ul className="ratings mb-20">
                                    <li>
                                      <span>Your Rating</span>
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                    <li className="star">
                                      <i className="flaticon-star-1" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form_group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Full Name"
                                    name="name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form_group">
                                  <input
                                    type="email"
                                    className="form_control"
                                    placeholder="Email Address"
                                    name="email"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <textarea
                                    className="form_control"
                                    placeholder="Write Message"
                                    name="comment"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form_group">
                                  <button className="main-btn">Submit</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="releted-product-area">
              <h3 className="releted-title">Related Product</h3>
              <div className="releted-products-slider-one slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4400,
                      transform: "translate3d(-2000px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={-3}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-2.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-2.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Green Plastic Light
                          </a>
                        </h3>
                        <span className="price">$120.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={-2}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-3.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-3.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Leaser Photography
                          </a>
                        </h3>
                        <span className="price">$320.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={-1}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-4.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-4.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Nike Sports Shoe
                          </a>
                        </h3>
                        <span className="price">$232.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={0}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-1.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-1.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Hand Dumbell
                          </a>
                        </h3>
                        <span className="price">
                          $250 <span className="pre-price">$270</span>
                        </span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={1}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-2.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-2.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Green Plastic Light
                          </a>
                        </h3>
                        <span className="price">$120.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-current slick-active"
                      style={{ width: 370 }}
                      tabIndex={0}
                      data-slick-index={2}
                      aria-hidden="false"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-3.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-3.jpg"
                              className="icon img-popup"
                              tabIndex={0}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={0}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={0}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={0}>
                            Leaser Photography
                          </a>
                        </h3>
                        <span className="price">$320.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-active"
                      style={{ width: 370 }}
                      tabIndex={0}
                      data-slick-index={3}
                      aria-hidden="false"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-4.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-4.jpg"
                              className="icon img-popup"
                              tabIndex={0}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={0}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={0}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={0}>
                            Nike Sports Shoe
                          </a>
                        </h3>
                        <span className="price">$232.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned slick-active"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={4}
                      aria-hidden="false"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-1.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-1.jpg"
                              className="icon img-popup"
                              tabIndex={0}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={0}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={0}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={0}>
                            Hand Dumbell
                          </a>
                        </h3>
                        <span className="price">
                          $250 <span className="pre-price">$270</span>
                        </span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={5}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-2.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-2.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Green Plastic Light
                          </a>
                        </h3>
                        <span className="price">$120.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={6}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-3.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-3.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Leaser Photography
                          </a>
                        </h3>
                        <span className="price">$320.00</span>
                      </div>
                    </div>
                    <div
                      className="products-item products-item-one slick-slide slick-cloned"
                      style={{ width: 370 }}
                      tabIndex={-1}
                      data-slick-index={7}
                      aria-hidden="true"
                    >
                      <div className="product-img">
                        <img
                          src="assets/images/products/products-4.jpg"
                          alt="products Image"
                        />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                          <div className="product-meta">
                            <a
                              href="assets/images/products/products-4.jpg"
                              className="icon img-popup"
                              tabIndex={-1}
                            >
                              <i className="ti-zoom-in" />
                            </a>
                            <a href="#" className="icon cart-btn" tabIndex={-1}>
                              <i className="ti-shopping-cart" />
                            </a>
                            <a
                              href="#"
                              className="icon wishlist-btn"
                              tabIndex={-1}
                            >
                              <i className="ti-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="title">
                          <a href="products-details.html" tabIndex={-1}>
                            Nike Sports Shoe
                          </a>
                        </h3>
                        <span className="price">$232.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====== End Product-details Section ======--> */}
      </Welcome>
    </>
  );
}
