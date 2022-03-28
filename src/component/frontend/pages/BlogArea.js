import React from "react";

export default function BlogArea() {
  return (
    <>
      <section className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Recent Articles</span>
                <h2>Every Single Journal</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40">
                <div className="post-thumbnail">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-1.jpg" alt="Blog Image" />
                  </a>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Duis nonummy socios mattis tempus penatibus
                    </a>
                  </h3>
                  <div className="post-meta">
                    <ul>
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
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40">
                <div className="post-thumbnail">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-2.jpg" alt="Blog Image" />
                  </a>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Litora phasellus in phasellus curabitur porta eun
                    </a>
                  </h3>
                  <div className="post-meta">
                    <ul>
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
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40">
                <div className="post-thumbnail">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-3.jpg" alt="Blog Image" />
                  </a>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Mattis parturent tortor lectus lestie sapien Dapus
                    </a>
                  </h3>
                  <div className="post-meta">
                    <ul>
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
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40">
                <a href="blog.html" className="main-btn icon-btn">
                  View Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
