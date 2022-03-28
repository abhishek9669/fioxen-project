import React from "react";
import Welcome from "../../common/Welcome";
import ListHeroBanner from "../Listing/pages/ListHeroBanner";

export default function OurBlog() {
  return (
    <>
      <Welcome>
        <ListHeroBanner title={"Our Blog"} active={"Our Blog"} />
        {/* <!--====== Start Blog Section ======--> */}
        <section className="blog-area pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-standard-wrapper pb-50">
                  <div className="blog-post-item blog-post-item-four mb-50">
                    <div className="post-thumbnail">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-standard-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        02 Sep - 2021
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-bookmark-alt" />
                              <a href="#">Tours &amp; Travel</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-comments-smiley" />
                              <a href="#">0 Comment</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-id-badge" />
                              <a href="#">By admin</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Duis nonumer socios gem mattis
                        </a>
                      </h3>
                      <p>
                        Penatibus cursus Luctus taciti nibh congue sollicitudin
                        placerat an tempus turpis magnis tempus inte vivamus
                        rhoncus roin habitasse diam
                      </p>
                      <a href="#" className="btn-link">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                  <div className="blog-post-item blog-post-item-four mb-50">
                    <div className="post-thumbnail">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-standard-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        02 Sep - 2021
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-bookmark-alt" />
                              <a href="#">Tours &amp; Travel</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-comments-smiley" />
                              <a href="#">0 Comment</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-id-badge" />
                              <a href="#">By admin</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Duis nonumer socios gem mattis
                        </a>
                      </h3>
                      <p>
                        Penatibus cursus Luctus taciti nibh congue sollicitudin
                        placerat an tempus turpis magnis tempus inte vivamus
                        rhoncus roin habitasse diam
                      </p>
                      <a href="#" className="btn-link">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                  <div className="blog-post-item blog-post-item-four mb-50">
                    <div className="post-thumbnail">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-standard-3.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        02 Sep - 2021
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-bookmark-alt" />
                              <a href="#">Tours &amp; Travel</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-comments-smiley" />
                              <a href="#">0 Comment</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-id-badge" />
                              <a href="#">By admin</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Duis nonumer socios gem mattis
                        </a>
                      </h3>
                      <p>
                        Penatibus cursus Luctus taciti nibh congue sollicitudin
                        placerat an tempus turpis magnis tempus inte vivamus
                        rhoncus roin habitasse diam
                      </p>
                      <a href="#" className="btn-link">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                  <div
                    className="blog-post-item blog-post-item-four blog-post-with-bg mb-50 bg_cover"
                    style={{
                      backgroundImage:
                        "url(assets/images/blog/blog-standard-4.jpg)",
                    }}
                  >
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        02 Sep - 2021
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-bookmark-alt" />
                              <a href="#">Tours &amp; Travel</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-comments-smiley" />
                              <a href="#">0 Comment</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-id-badge" />
                              <a href="#">By admin</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <a href="#">Duis nonumer socios gem mattis</a>
                      </h3>
                      <p>
                        Penatibus cursus Luctus taciti nibh congue sollicitudin
                        placerat an tempus turpis magnis tempus inte vivamus
                        rhoncus roin habitasse diam
                      </p>
                      <a href="#" className="btn-link">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                  <div className="blog-post-item blog-post-item-four blog-post-video mb-50">
                    <div className="post-thumbnail">
                      <a href="blog-details.html">
                        <img
                          src="assets/images/blog/blog-standard-5.jpg"
                          alt="Blog Image"
                        />
                      </a>
                      <div className="play-content play-content-two text-center">
                        <a
                          href="https://www.youtube.com/watch?v=lJyzByVH1oQ"
                          className="video-popup"
                        >
                          <i className="flaticon-play-button" />
                        </a>
                        <h5>Play Video</h5>
                      </div>
                    </div>
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        02 Sep - 2021
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-bookmark-alt" />
                              <a href="#">Tours &amp; Travel</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-comments-smiley" />
                              <a href="#">0 Comment</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-id-badge" />
                              <a href="#">By admin</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Duis nonumer socios gem mattis
                        </a>
                      </h3>
                      <p>
                        Penatibus cursus Luctus taciti nibh congue sollicitudin
                        placerat an tempus turpis magnis tempus inte vivamus
                        rhoncus roin habitasse diam
                      </p>
                      <a href="#" className="btn-link">
                        Continue Reading
                      </a>
                    </div>
                  </div>
                  <div className="fioxen-pagination text-center">
                    <ul className="pagination-list">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          <i className="ti-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-widget-area mb-20">
                  <div className="widget search-widget mb-30">
                    <h4 className="widget-title">Search</h4>
                    <form>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Search..."
                          name="email"
                          required
                        />
                        <i className="ti-location-arrow" />
                      </div>
                    </form>
                  </div>
                  <div className="widget categories-widget mb-30">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="categories-nav">
                      <li>
                        <a href="#">
                          Restaurant <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Museums <span>(12)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Business <span>(05)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Tour &amp; Travel <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Uncategory <span>(03)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget recent-post-widget mb-30">
                    <h4 className="widget-title">Popular Post</h4>
                    <ul className="recent-post-list">
                      <li className="post-thumbnail-content">
                        <img
                          src="assets/images/elements/thumb-1.jpg"
                          className="img-fluid"
                        />
                        <div className="post-title-date">
                          <span className="posted-on">
                            <i className="ti-calendar" />
                            <a href="#">02 Sep - 2021</a>
                          </span>
                          <h6>
                            <a href="blog-details.html">
                              Inceptos pharetra accusan tusto scelerisque
                            </a>
                          </h6>
                        </div>
                      </li>
                      <li className="post-thumbnail-content">
                        <img
                          src="assets/images/elements/thumb-2.jpg"
                          className="img-fluid"
                        />
                        <div className="post-title-date">
                          <span className="posted-on">
                            <i className="ti-calendar" />
                            <a href="#">02 Sep - 2021</a>
                          </span>
                          <h6>
                            <a href="blog-details.html">
                              Inceptos pharetra accusan tusto scelerisque
                            </a>
                          </h6>
                        </div>
                      </li>
                      <li className="post-thumbnail-content">
                        <img
                          src="assets/images/elements/thumb-3.jpg"
                          className="img-fluid"
                        />
                        <div className="post-title-date">
                          <span className="posted-on">
                            <i className="ti-calendar" />
                            <a href="#">02 Sep - 2021</a>
                          </span>
                          <h6>
                            <a href="blog-details.html">
                              Inceptos pharetra accusan tusto scelerisque
                            </a>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget add-widget mb-30">
                    <div className="add-img-box">
                      <img
                        src="assets/images/elements/add-1.jpg"
                        alt="Add Image"
                      />
                    </div>
                  </div>
                  <div className="widget tag-cloud-widget mb-30">
                    <h4 className="widget-title">Popular Tag</h4>
                    <a href="#">Decor</a>
                    <a href="#">Love</a>
                    <a href="#">Trendy</a>
                    <a href="#">Interior</a>
                    <a href="#">Architect</a>
                    <a href="#">Feature</a>
                    <a href="#">Modern</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====== End Blog Section ======--> */}
      </Welcome>
    </>
  );
}
