import React from "react";
import ListHeroBanner from "./ListHeroBanner";

export default function ListingListArea() {
  return (
    <>
    <ListHeroBanner title={"List Layout"} active={"List Layout"}/>
      <section className="listing-list-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30">
                  <h4 className="widget-title">Filter Search</h4>
                  <form>
                    <div className="search-form">
                      <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                        />
                        <i className="ti-search"></i>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option>Category</option>
                          <option value="01">Museums</option>
                          <option value="02">Restaurant</option>
                          <option value="03">Party Center</option>
                          <option value="04">Fitness Zone</option>
                          <option value="05">Game Field</option>
                          <option value="06">Job &amp; Feeds</option>
                          <option value="07">Shooping</option>
                          <option value="08">Art Gallery</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">Category</span>
                          <ul className="list">
                            <li
                              data-value="Category"
                              className="option selected"
                            >
                              Category
                            </li>
                            <li data-value="01" className="option">
                              Museums
                            </li>
                            <li data-value="02" className="option">
                              Restaurant
                            </li>
                            <li data-value="03" className="option">
                              Party Center
                            </li>
                            <li data-value="04" className="option">
                              Fitness Zone
                            </li>
                            <li data-value="05" className="option">
                              Game Field
                            </li>
                            <li data-value="06" className="option">
                              Job &amp; Feeds
                            </li>
                            <li data-value="07" className="option">
                              Shooping
                            </li>
                            <li data-value="08" className="option">
                              Art Gallery
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option>Location</option>
                          <option value="01">Dhaka</option>
                          <option value="02">Delhi</option>
                          <option value="03">lahore</option>
                          <option value="04">Rome</option>
                          <option value="05">New york</option>
                          <option value="06">Pris</option>
                          <option value="07">Bern</option>
                          <option value="08">Bangkok</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">Location</span>
                          <ul className="list">
                            <li
                              data-value="Location"
                              className="option selected"
                            >
                              Location
                            </li>
                            <li data-value="01" className="option">
                              Dhaka
                            </li>
                            <li data-value="02" className="option">
                              Delhi
                            </li>
                            <li data-value="03" className="option">
                              lahore
                            </li>
                            <li data-value="04" className="option">
                              Rome
                            </li>
                            <li data-value="05" className="option">
                              New york
                            </li>
                            <li data-value="06" className="option">
                              Pris
                            </li>
                            <li data-value="07" className="option">
                              Bern
                            </li>
                            <li data-value="08" className="option">
                              Bangkok
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option>By Country</option>
                          <option value="01">Bangladesh</option>
                          <option value="02">India</option>
                          <option value="03">Pakistan</option>
                          <option value="04">Italy</option>
                          <option value="05">America</option>
                          <option value="06">London</option>
                          <option value="07">Swizerland</option>
                          <option value="08">Thailand</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">By Country</span>
                          <ul className="list">
                            <li
                              data-value="By Country"
                              className="option selected"
                            >
                              By Country
                            </li>
                            <li data-value="01" className="option">
                              Bangladesh
                            </li>
                            <li data-value="02" className="option">
                              India
                            </li>
                            <li data-value="03" className="option">
                              Pakistan
                            </li>
                            <li data-value="04" className="option">
                              Italy
                            </li>
                            <li data-value="05" className="option">
                              America
                            </li>
                            <li data-value="06" className="option">
                              London
                            </li>
                            <li data-value="07" className="option">
                              Swizerland
                            </li>
                            <li data-value="08" className="option">
                              Thailand
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form_group">
                        <select className="wide" style={{display:"none"}}>
                          <option>By place</option>
                          <option value="01">Dhaka</option>
                          <option value="02">Delhi</option>
                          <option value="03">lahore</option>
                          <option value="04">Rome</option>
                          <option value="05">New york</option>
                          <option value="06">Pris</option>
                          <option value="07">Bern</option>
                          <option value="08">Bangkok</option>
                        </select>
                        <div className="nice-select wide" tabIndex="0">
                          <span className="current">By place</span>
                          <ul className="list">
                            <li
                              data-value="By place"
                              className="option selected"
                            >
                              By place
                            </li>
                            <li data-value="01" className="option">
                              Dhaka
                            </li>
                            <li data-value="02" className="option">
                              Delhi
                            </li>
                            <li data-value="03" className="option">
                              lahore
                            </li>
                            <li data-value="04" className="option">
                              Rome
                            </li>
                            <li data-value="05" className="option">
                              New york
                            </li>
                            <li data-value="06" className="option">
                              Pris
                            </li>
                            <li data-value="07" className="option">
                              Bern
                            </li>
                            <li data-value="08" className="option">
                              Bangkok
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="price-range-widget">
                      <h4 className="widget-title">Around Distance: 50 km</h4>
                      <div
                        id="slider-range"
                        className="mb-20 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      >
                        <div
                          className="ui-slider-range ui-corner-all ui-widget-header"
                          style={{left: "10%", width: "77.5%"}}
                        ></div>
                        <span
                          tabIndex="0"
                          className="ui-slider-handle ui-corner-all ui-state-default"
                          style={{left:"10%"}}
                        ></span>
                        <span
                          tabIndex="0"
                          className="ui-slider-handle ui-corner-all ui-state-default"
                          style={{left:"87.5%"}}
                        ></span>
                      </div>
                      <div className="price-number">
                        <span className="amount">
                          <input type="text" id="amount" />
                        </span>
                      </div>
                      <select className="wide" style={{display:"none"}}>
                        <option>Default price</option>
                        <option value="01">$10-$30</option>
                        <option value="02">$30-$70</option>
                        <option value="03">$70-$100</option>
                        <option value="04">$100-$130</option>
                        <option value="05">$130-$150</option>
                      </select>
                      <div className="nice-select wide" tabIndex="0">
                        <span className="current">Default price</span>
                        <ul className="list">
                          <li
                            data-value="Default price"
                            className="option selected"
                          >
                            Default price
                          </li>
                          <li data-value="01" className="option">
                            $10-$30
                          </li>
                          <li data-value="02" className="option">
                            $30-$70
                          </li>
                          <li data-value="03" className="option">
                            $70-$100
                          </li>
                          <li data-value="04" className="option">
                            $100-$130
                          </li>
                          <li data-value="05" className="option">
                            $130-$150
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </form>
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
            <div className="col-lg-8">
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option data-dsplay="Default Sorting">
                            Default Sorting
                          </option>
                          <option value="01">Museums</option>
                          <option value="02">Restaurant</option>
                          <option value="03">Party Center</option>
                          <option value="04">Fitness Zone</option>
                          <option value="05">Game Field</option>
                        </select>
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Default Sorting</span>
                          <ul className="list">
                            <li
                              data-value="Default Sorting"
                              className="option selected"
                            >
                              Default Sorting
                            </li>
                            <li data-value="01" className="option">
                              Museums
                            </li>
                            <li data-value="02" className="option">
                              Restaurant
                            </li>
                            <li data-value="03" className="option">
                              Party Center
                            </li>
                            <li data-value="04" className="option">
                              Fitness Zone
                            </li>
                            <li data-value="05" className="option">
                              Game Field
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <a href="listing-grid.html" className="active">
                            <i className="ti-view-grid"></i>
                          </a>
                        </li>
                        <li>
                          <a href="listing-list.html">
                            <i className="ti-view-list-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-list-wrapper">
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-5.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-government"></i>
                        </div>
                        <div className="title">
                          <h6>Art Gallery</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">National Art</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-6.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-chef"></i>
                        </div>
                        <div className="title">
                          <h6>Restaurant</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">Food Corner</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-7.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-government"></i>
                        </div>
                        <div className="title">
                          <h6>Museums</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">Central History</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-8.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-dumbbell"></i>
                        </div>
                        <div className="title">
                          <h6>Fitness</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">Xtream Gym</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-9.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-suitcase"></i>
                        </div>
                        <div className="title">
                          <h6>Job &amp; Feed</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">Mega Agency</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="listing-item listing-list-item-two mb-60">
                  <div className="listing-thumbnail">
                    <img
                      src="assets/images/listing/listing-list-10.jpg"
                      alt="listing Image"
                    />
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                          <i className="flaticon-shopping"></i>
                        </div>
                        <div className="title">
                          <h6>Shopping</h6>
                        </div>
                      </div>
                      <span className="status st-open">Open</span>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title">
                      <a href="listing-details-1.html">Central Plaza</a>
                    </h3>
                    <div className="ratings">
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
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta">
                      <i className="ti-tablet"></i>
                      <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                    </span>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin"></i>California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart"></i>
                            <a href="#">Save</a>
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
      </section>
    </>
  );
}
