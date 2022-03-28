import React from 'react'

export default function ListHeroBanner({title, active}) {
  return (
    <section className="hero-area">
        <div className="breadcrumbs-wrapper">
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <div className="page-title">
                <h1 className="title">{title}</h1>
                <ul className="breadcrumbs-link">
                    <li>
                    <a href="index.html">Home</a>
                    </li>
                    <li className="active">{active}</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
  </section>
  )
}
