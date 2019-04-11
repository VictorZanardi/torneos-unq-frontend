import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import './fonts/icomoon/style.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/owl.theme.default.min.css'
import './css/aos.css'
import './css/style.css'
import logo from './images/Logo.png'; // with import
import teams from './components/Teams.js';

class App extends React.Component {
  render() {
    return (
      <div>
      <title>Sportz — Colorlib Sports Team Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-logo">
              <a href="#"><img src={logo} alt="Image" /></a>
            </div>
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <header className="site-navbar absolute transparent" role="banner">
          <div className="py-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-3">
                  <a href="#" className="text-secondary px-2 pl-0"><span className="icon-facebook" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-instagram" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-twitter" /></a>
                  <a href="#" className="text-secondary px-2"><span className="icon-linkedin" /></a>
                </div>
                <div className="col-6 col-md-9 text-right">
                  <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-envelope mr-3" /> <span className="d-none d-md-block">youremail@domain.com</span></a></div>
                  <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-phone mr-0 mr-md-3" /> <span className="d-none d-md-block">+1 232 3532 321</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <nav className="site-navigation position-relative text-right bg-black text-md-right" role="navigation">
            <div className="container position-relative">
              <div className="site-logo">
                <a href="/"><img src={logo} width="150" height="150" /></a>
              </div>
              <div className="d-inline-block d-md-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
              <ul className="site-menu js-clone-nav d-none d-md-block">
                <li className="has-children active">
                  <a href="/">Home</a>
                  <ul className="dropdown arrow-top">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                    <li className="has-children">
                      <a href="#">Sub Menu</a>
                      <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="news.html">News</a>
                  <ul className="dropdown arrow-top">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                  </ul>
                </li>
                <li><a href="matches.html">Matches</a></li>
                <li><a href="/Teams">Teams</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="site-blocks-vs site-section bg-light">
          <div className="container">
            <div className="border mb-3 rounded d-block d-lg-flex align-items-center p-3 next-match">
              <div className="mr-auto order-md-1 w-60 text-center text-lg-left mb-3 mb-lg-0">
                Next match
                <div id="date-countdown" />
              </div>
              <div className="ml-auto pr-4 order-md-2">
                <div className="h5 text-black text-uppercase text-center text-lg-left">
                  <div className="d-block d-md-inline-block mb-3 mb-lg-0">
                    <img src="images/img_1_sq.jpg" alt="Image" className="mr-3 image" /><span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">Sea Hawlks </span>
                  </div>
                  <span className="text-muted mx-3 text-normal mb-3 mb-lg-0 d-block d-md-inline ">vs</span>
                  <div className="d-block d-md-inline-block">
                    <img src="images/img_3_sq.jpg" alt="Image" className="mr-3 image" /><span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">Patriots</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-image overlay-success rounded mb-5" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}} data-stellar-background-ratio="0.5">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image mx-auto mb-3 mb-lg-0 mr-lg-3">
                        <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">Sea Hawks</h3>
                        <span className="text-uppercase small country text-black">Brazil</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="d-inline-block">
                    <p className="mb-2"><small className="text-uppercase text-black font-weight-bold">Premier League — Round 10</small></p>
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h3">3:2</span></div>
                    <p className="mb-0"><small className="text-uppercase text-black font-weight-bold">10 September / 7:30 AM</small></p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image mx-auto ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                      </div>
                      <div className="text order-1">
                        <h3 className="h5 mb-0 text-black">Steelers</h3>
                        <span className="text-uppercase small country text-black">London</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Latest Matches</h2>
                <div className="site-block-tab">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Match 1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Match 2</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Match 3</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Packers</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Steelers</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Patriots</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Cowboys</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Raiders</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Chiefs</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Packers</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Steelers</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Patriots</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Cowboys</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Raiders</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Chiefs</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Packers</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Steelers</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Patriots</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Cowboys</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Raiders</h3>
                                    <span className="text-uppercase small country">Brazil</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                              <div className="d-inline-block">
                                <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">3:2</span></div>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-4 text-center text-lg-right">
                              <div className>
                                <div className="d-block d-lg-flex align-items-center">
                                  <div className="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">
                                    <img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
                                  </div>
                                  <div className="text order-1 w-100">
                                    <h3 className="h5 mb-0 text-black">Chiefs</h3>
                                    <span className="text-uppercase small country">London</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* END row */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">About Sportz</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                </div>
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Recent Blog</h3>
                  <div className="block-25">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img src="images/img_1.jpg" alt className="img-fluid" />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet consectetur elit</h3>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img src="images/img_1.jpg" alt className="img-fluid" />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet consectetur elit</h3>
                          </div>
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="d-flex">
                          <figure className="image mr-4">
                            <img src="images/img_1.jpg" alt className="img-fluid" />
                          </figure>
                          <div className="text">
                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet consectetur elit</h3>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Quick Menu</h3>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Matches</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Team</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Membership</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Follow Us</h3>
                    <div>
                      <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="mb-5">
                  <h3 className="footer-heading mb-4">Watch Video</h3>
                  <div className="block-16">
                    <figure>
                      <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                      <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
                    </figure>
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
                  <form action="#" method="post">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
