import React from "react";
import ListHeroBanner from "./ListHeroBanner";
import Map from "./Map";
export default function ListingMapArea() {
  return (
    <>
      <ListHeroBanner title={"Listing Map"} active={"Listing Map"} />
      <Map />
       {/* <!--====== Start listing Section ======--> */}
      <section className="listing-grid-area pb-120">
            <form>
                <div className="container">
                    <div className="row">
                        <div className="listing-search-form mb-120">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Search By Keyword" name="search" required="" />
                                        <i className="ti-ink-pen"></i>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-dsplay="Category">Category</option>
                                            <option value="01">Museums</option>
                                            <option value="02">Restaurant</option>
                                            <option value="03">Party Center</option>
                                            <option value="04">Fitness Zone</option>
                                            <option value="05">Game Field</option>
                                            <option value="06">Job &amp; Feeds</option>
                                            <option value="07">Shooping</option>
                                            <option value="08">Art Gallery</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Category</span><ul className="list"><li data-value="Category" className="option selected">Category</li><li data-value="01" className="option">Museums</li><li data-value="02" className="option">Restaurant</li><li data-value="03" className="option">Party Center</li><li data-value="04" className="option">Fitness Zone</li><li data-value="05" className="option">Game Field</li><li data-value="06" className="option">Job &amp; Feeds</li><li data-value="07" className="option">Shooping</li><li data-value="08" className="option">Art Gallery</li></ul></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Location" name="location" required="" />
                                        <i className="ti-location-pin"></i>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-dsplay="Location">Location</option>
                                            <option value="01">Dhaka</option>
                                            <option value="02">Delhi</option>
                                            <option value="03">lahore</option>
                                            <option value="04">Rome</option>
                                            <option value="05">New york</option>
                                            <option value="06">Pris</option>
                                            <option value="07">Bern</option>
                                            <option value="08">Bangkok</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Location</span><ul className="list"><li data-value="Location" className="option selected">Location</li><li data-value="01" className="option">Dhaka</li><li data-value="02" className="option">Delhi</li><li data-value="03" className="option">lahore</li><li data-value="04" className="option">Rome</li><li data-value="05" className="option">New york</li><li data-value="06" className="option">Pris</li><li data-value="07" className="option">Bern</li><li data-value="08" className="option">Bangkok</li></ul></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-dsplay="By Country">By Country</option>
                                            <option value="01">Bangladesh</option>
                                            <option value="02">India</option>
                                            <option value="03">Pakistan</option>
                                            <option value="04">Italy</option>
                                            <option value="05">America</option>
                                            <option value="06">London</option>
                                            <option value="07">Swizerland</option>
                                            <option value="08">Thailand</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">By Country</span><ul className="list"><li data-value="By Country" className="option selected">By Country</li><li data-value="01" className="option">Bangladesh</li><li data-value="02" className="option">India</li><li data-value="03" className="option">Pakistan</li><li data-value="04" className="option">Italy</li><li data-value="05" className="option">America</li><li data-value="06" className="option">London</li><li data-value="07" className="option">Swizerland</li><li data-value="08" className="option">Thailand</li></ul></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-dsplay="Default price">Default price</option>
                                            <option value="01">$10-$30</option>
                                            <option value="02">$30-$70</option>
                                            <option value="03">$70-$100</option>
                                            <option value="04">$100-$130</option>
                                            <option value="05">$130-$150</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Default price</span><ul className="list"><li data-value="Default price" className="option selected">Default price</li><li data-value="01" className="option">$10-$30</li><li data-value="02" className="option">$30-$70</li><li data-value="03" className="option">$70-$100</li><li data-value="04" className="option">$100-$130</li><li data-value="05" className="option">$130-$150</li></ul></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="form_group">
                                        <button className="main-btn icon-btn">Search Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="listing-tab-filter mb-50">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#all">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat1">Food</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat2">Career</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat3">Shopping</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat4">Parking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat5">Business</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cat6">Museums</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="listing-search-filter mb-40">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="filter-left d-flex align-items-center">
                                            <div className="show-text">
                                                <span>Showing Result 1-09</span>
                                            </div>
                                            <div className="sorting-dropdown">
                                                <select style={{display:"none"}}>
                                                    <option data-dsplay="Default Sorting">Default Sorting</option>
                                                    <option value="01">Museums</option>
                                                    <option value="02">Restaurant</option>
                                                    <option value="03">Party Center</option>
                                                    <option value="04">Fitness Zone</option>
                                                    <option value="05">Game Field</option>
                                                </select><div className="nice-select" tabIndex="0"><span className="current">Default Sorting</span><ul className="list"><li data-value="Default Sorting" className="option selected">Default Sorting</li><li data-value="01" className="option">Museums</li><li data-value="02" className="option">Restaurant</li><li data-value="03" className="option">Party Center</li><li data-value="04" className="option">Fitness Zone</li><li data-value="05" className="option">Game Field</li></ul></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="filter-right">
                                            <ul className="filter-nav">
                                                <li><a href="listing-grid.html" className="active"><i className="ti-view-grid"></i></a></li>
                                                <li><a href="listing-list.html"><i className="ti-view-list-alt"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="all">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Party Corner</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">City Palace</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Easter Plaza</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Gym Ground</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Miyami Sea</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-30.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Sky Center</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-31.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Gym Ground</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-32.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Coffee Time</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat1">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat2">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat4">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat5">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat6">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="listing-item listing-grid-item-two mb-30">
                                                <div className="listing-thumbnail">
                                                    <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                                    <a href="#" className="cat-btn"><i className="flaticon-chef"></i></a>
                                                    <span className="featured-btn">Featured</span>
                                                    <ul className="ratings ratings-four">
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li className="star"><i className="flaticon-star-1"></i></li>
                                                        <li><span><a href="#">(02 Reviews)</a></span></li>
                                                    </ul>
                                                </div>
                                                <div className="listing-content">
                                                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                                    <p>Popular restaurant in california</p>
                                                    <span className="phone-meta"><i className="ti-tablet"></i><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                                    <div className="listing-meta">
                                                        <ul>
                                                            <li><span><i className="ti-location-pin"></i>California, USA</span></li>
                                                            <li><span><i className="ti-heart"></i><a href="#">Save</a></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button text-center mt-30">
                                <a href="listing-map.html" className="main-btn icon-btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
      {/* <!--====== End listing Section ======--> */}
    </>
  );
}
