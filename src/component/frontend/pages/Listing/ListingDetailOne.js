import React from "react";
import Welcome from "../../common/Welcome";

export default function ListingDetailOne() {
  return (
    <Welcome>
      {/* <!--====== Start Breadcrumbs section ======--> */}
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <img
                        src="assets/images/listing/info-1.jpg"
                        alt="thumb image"
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">Restaurant</span>
                      <h3>Food Corner</h3>
                      <p className="tag">
                        <a href="#">Popular restaurant</a>,
                        <a href="#">California</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="listing-info-content">
                  <div className="content">
                    <ul className="ratings ratings-three">
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="ti-location-pin" />
                            California, USA
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-tablet" />
                            <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="button">
                  <a href="listing-grid.html" className="icon-btn">
                    <i className="ti-heart" />
                  </a>
                  <a href="listing-grid.html" className="icon-btn">
                    <i className="ti-share" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Start Breadcrumbs section ======--> */}

      {/* <!--====== Start Listing Details section ======--> */}
      <section className="listing-details-section pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="listing-details-wrapper listing-details-wrapper-one">
                            <div className="listing-content mb-50">
                                <h3 className="title">Delicious Restaurant</h3>
                                <p>Parturient varius elementum maecenas faucibus maecenas inceptos commodo metus vitae ac pretium magnis. Ridiculus aenean diam duis montes mattis curae dis platea cubilia fames justo nullam per incepto Accumsan mollis, semper nisl nulla per curae ante tellus cursus ut blandit eleifend ut adipiscing fringilla Sociosqu penatibus nascetur senectus, molestie sed habitant adipiscing maecenas ultrices curae sociis mi eros ultrices euismod risus cubilia eget habitasse facilisic</p>
                                <p className="para">Eros senectus etiam sed habitasse arcu habitant nulla nam amet sociis leo suspendisse in dignissim litora venenatis torquent tempor dapibus ridiculus consectetuer nece sagittis </p>
                            </div>
                            <div className="listing-features-box mb-50">
                                <h4 className="title">Our Features</h4>
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
                            </div>
                            <div className="listing-gallery-box">
                                <h4 className="title">Photo Showcase</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="gallery-item mb-30">
                                            <a href="assets/images/listing/gallery-1.jpg" className="img-popup"><img src="assets/images/listing/gallery-1.jpg" alt="gallery image" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="gallery-item mb-30">
                                            <a href="assets/images/listing/gallery-2.jpg" className="img-popup"><img src="assets/images/listing/gallery-2.jpg" alt="gallery image" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="gallery-item mb-30">
                                            <a href="assets/images/listing/gallery-3.jpg" className="img-popup"><img src="assets/images/listing/gallery-3.jpg" alt="gallery image" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="gallery-item mb-30">
                                            <a href="assets/images/listing/gallery-4.jpg" className="img-popup"><img src="assets/images/listing/gallery-4.jpg" alt="gallery image" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="listing-tag-box mb-50">
                                <h4 className="title">Popular Tag</h4>
                                <a href="#">Delivery</a>
                                <a href="#">Restaurant</a>
                                <a href="#">Free Internet</a>
                                <a href="#">Shopping</a>
                                <a href="#">Car Parking</a>
                                <a href="#">Food</a>
                                <a href="#">Kitchen</a>
                                <a href="#">Reservation</a>
                                <a href="#">Travel</a>
                            </div>
                            <div className="listing-faq-box mb-50">
                                <h4 className="title">Asked Question</h4>
                                <div className="faq-accordian" id="listingFaq">
                                    <div className="card">
                                        <a className="card-header" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">How do I Make a regular Table Booking?</a>
                                        <div id="collapseOne" className="collapse show" data-parent="#listingFaq">
                                            <div className="card-body">
                                                <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum viverra cubilia ipsum ut duis amet nullam sit ut ornare mattis urna. Parturient. Aptent erat blandit dolor porta eros mollis hendrerit leo viverra pellentesque fusce.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">How can I be certain my booking's been received?</a>
                                        <div id="collapseTwo" className="collapse" data-parent="#listingFaq">
                                            <div className="card-body">
                                                <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum viverra cubilia ipsum ut duis amet nullam sit ut ornare mattis urna. Parturient. Aptent erat blandit dolor porta eros mollis hendrerit leo viverra pellentesque fusce.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">How much do I have to pay for my booking?</a>
                                        <div id="collapseThree" className="collapse" data-parent="#listingFaq">
                                            <div className="card-body">
                                                <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum viverra cubilia ipsum ut duis amet nullam sit ut ornare mattis urna. Parturient. Aptent erat blandit dolor porta eros mollis hendrerit leo viverra pellentesque fusce.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false">What happens restaurant and they don't have my booking?</a>
                                        <div id="collapseFour" className="collapse" data-parent="#listingFaq">
                                            <div className="card-body">
                                                <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum viverra cubilia ipsum ut duis amet nullam sit ut ornare mattis urna. Parturient. Aptent erat blandit dolor porta eros mollis hendrerit leo viverra pellentesque fusce.</p>
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
                                            <img src="assets/images/listing/review-1.jpg" alt="review image" />
                                        </div>
                                        <div className="review-content">
                                            <h5>Moriana Steve</h5>
                                            <span className="date">Sep 02, 2021</span>
                                            <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum verra cubilia ipsum duis amet nullam sit ut ornare mattis urna. </p>
                                            <div className="content-meta d-flex align-items-center justify-content-between">
                                                <ul className="ratings ratings-three">
                                                    <li><span className="av-rate">4.5</span></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                </ul>
                                                <a href="#" className="reply"><i className="ti-share-alt"></i>Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review">
                                        <div className="thumb">
                                            <img src="assets/images/listing/review-2.jpg" alt="review image" />
                                        </div>
                                        <div className="review-content">
                                            <h5>Moriana Steve</h5>
                                            <span className="date">Sep 02, 2021</span>
                                            <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum verra cubilia ipsum duis amet nullam sit ut ornare mattis urna. </p>
                                            <div className="content-meta d-flex align-items-center justify-content-between">
                                                <ul className="ratings ratings-three">
                                                    <li><span className="av-rate">4.5</span></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                </ul>
                                                <a href="#" className="reply"><i className="ti-share-alt"></i>Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review">
                                        <div className="thumb">
                                            <img src="assets/images/listing/review-3.jpg" alt="review image" />
                                        </div>
                                        <div className="review-content">
                                            <h5>Moriana Steve</h5>
                                            <span className="date">Sep 02, 2021</span>
                                            <p>Musutrum orci montes hac at neque mollis taciti parturient vehicula interdum verra cubilia ipsum duis amet nullam sit ut ornare mattis urna. </p>
                                            <div className="content-meta d-flex align-items-center justify-content-between">
                                                <ul className="ratings ratings-three">
                                                    <li><span className="av-rate">4.5</span></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                    <li className="star"><i className="flaticon-star-1"></i></li>
                                                </ul>
                                                <a href="#" className="reply"><i className="ti-share-alt"></i>Reply</a>
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
                                                <li><span>Rate Here:</span></li>
                                                <li className="star"><i className="flaticon-star-1"></i></li>
                                                <li className="star"><i className="flaticon-star-1"></i></li>
                                                <li className="star"><i className="flaticon-star-1"></i></li>
                                                <li className="star"><i className="flaticon-star-1"></i></li>
                                                <li className="star"><i className="flaticon-star-1"></i></li>
                                            </ul>
                                            <span>(02 Reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <textarea className="form_control" placeholder="Write Message" name="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_group">
                                                <input type="text" className="form_control" placeholder="Your name" name="name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_group">
                                                <input type="email" className="form_control" placeholder="Email here" name="email" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <div className="single-checkbox d-flex">
                                                    <input type="checkbox" id="check4" name="checkbox" />
                                                    <label htmlFor="check4"><span>Save my name, email, and website in this browser for the next time i comment.</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <button className="main-btn icon-btn">Submit Review</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-widget-area">
                            <div className="widget reservation-form-widget mb-30">
                                <h4 className="widget-title">Reservation</h4>
                                <form>
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Name" name="name" required="" />
                                        <i className="ti-user"></i>
                                    </div>
                                    <div className="form_group">
                                        <input type="text" className="form_control" placeholder="Phone" name="phone" required="" />
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-display="Guest">Guest</option>
                                            <option data-display="01">Guest 01</option>
                                            <option data-display="02">Guest 02</option>
                                            <option data-display="02">Guest 02</option>
                                            <option data-display="02">Guest 02</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Guest</span><ul className="list"><li data-value="Guest" data-display="Guest" className="option selected">Guest</li><li data-value="Guest 01" data-display="01" className="option">Guest 01</li><li data-value="Guest 02" data-display="02" className="option">Guest 02</li><li data-value="Guest 02" data-display="02" className="option">Guest 02</li><li data-value="Guest 02" data-display="02" className="option">Guest 02</li></ul></div>
                                    </div>
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-display="Date">Date</option>
                                            <option data-display="01">01.11.2021</option>
                                            <option data-display="02">01.11.2021</option>
                                            <option data-display="03">01.11.2021</option>
                                            <option data-display="04">01.11.2021</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Date</span><ul className="list"><li data-value="Date" data-display="Date" className="option selected">Date</li><li data-value="01.11.2021" data-display="01" className="option">01.11.2021</li><li data-value="01.11.2021" data-display="02" className="option">01.11.2021</li><li data-value="01.11.2021" data-display="03" className="option">01.11.2021</li><li data-value="01.11.2021" data-display="04" className="option">01.11.2021</li></ul></div>
                                    </div>
                                    <div className="form_group">
                                        <select className="wide" style={{display:"none"}}>
                                            <option data-display="Guest">Time</option>
                                            <option data-display="01">08.00AM-10.00AM</option>
                                            <option data-display="02">11.00AM-12.00PM</option>
                                            <option data-display="03">01.00PM-02.00PM</option>
                                            <option data-display="04">02.00PM-03.00PM</option>
                                        </select><div className="nice-select wide" tabIndex="0"><span className="current">Guest</span><ul className="list"><li data-value="Time" data-display="Guest" className="option selected">Time</li><li data-value="08.00AM-10.00AM" data-display="01" className="option">08.00AM-10.00AM</li><li data-value="11.00AM-12.00PM" data-display="02" className="option">11.00AM-12.00PM</li><li data-value="01.00PM-02.00PM" data-display="03" className="option">01.00PM-02.00PM</li><li data-value="02.00PM-03.00PM" data-display="04" className="option">02.00PM-03.00PM</li></ul></div>
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
                                        <a href="#" className="support-icon"><i className="flaticon-headphone"></i></a>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <div className="info-list">
                                            <p><i className="ti-tablet"></i><a href="tel:+98265365205">+98 (265) 3652 - 05</a></p>
                                            <p><i className="ti-location-pin"></i>45/A Natura, Barcelona, Spain</p>
                                            <p><i className="ti-email"></i><a href="mailto:contact@example.com">contact@example.com</a></p>
                                            <p><i className="ti-world"></i><a href="www.fioxen.com">www.fioxen.com</a></p>
                                        </div>
                                        <ul className="social-link">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-pinterest"></i></a></li>
                                            <li><a href="#"><i className="ti-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="widget business-hour-widget mb-30">
                                <h4 className="widget-title">Business Hour</h4>
                                <ul className="time-info">
                                    <li><span className="day">Monday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Tuesday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Wednesday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Thursday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Friday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Saturday</span><span className="time">08:00 - 21:00</span></li>
                                    <li><span className="day">Sunday</span><span className="time st-close">Close</span></li>
                                </ul>
                            </div>
                            <div className="widget newsletter-widget mb-30">
                                <div className="newsletter-widget-wrap bg_cover" style={{backgroundImage:"url(assets/images/newsletter-widget-1.jpg)"}} >
                                    <i className="flaticon-email-1"></i>
                                    <h3>Subscribe Our
                                        Newsletter</h3>
                                        <button className="main-btn icon-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/* <!--====== End Listing Details section ======--> */}
    </Welcome>
  );
}
