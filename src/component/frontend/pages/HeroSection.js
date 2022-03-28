import React from 'react'

export default function HeroSection() {
  return (
    <>
       <section className="hero-area">
            <div className="hero-wrapper-one">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="hero-content">
                        <h1>Dream Explore
                        Discover</h1>
                        <h3>People Don’t Take,Trips Take People</h3>
                        <div className="hero-search-wrapper">
                        <form>
                            <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-12">
                                <div className="form_group">
                                <input type="search" className="form_control" placeholder="Search By Category" name="search" required />
                                <i className="ti-ink-pen" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form_group">
                                <input type="text" className="form_control" placeholder="Location" name="location" required />
                                <i className="ti-location-pin" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="form_group">
                                <button className="main-btn icon-btn">Search Now</button>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                        <p className="tags"><span>Popular:</span><a href="#">Saloon</a>,<a href="#">Restaurant</a>,<a href="#">Game</a>,<a href="#">Counter</a>,<a href="#">Train Station</a>,<a href="#">Parking</a>,<a href="#">Shooping</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}
