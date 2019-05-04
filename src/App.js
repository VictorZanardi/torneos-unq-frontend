import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/aos.css';
import './css/style.css';
import quilmes from './images/quilmes.svg';
import TablePositions from './components/TablePositions';
import Matches from './components/Matches';
import boca from './images/boca.png'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>

        <div className="site-blocks-vs site-section bg-light">
          <div className="container">
            {/* <div className="border mb-3 rounded d-block d-lg-flex align-items-center p-3 next-match">
              <div className="mr-auto order-md-1 w-60 text-center text-lg-left mb-3 mb-lg-0">
                Proximo Partido
                <div id="date-countdown" />
              </div>
              <div className="ml-auto pr-4 order-md-2">
                <div className="h5 text-black text-uppercase text-center text-lg-left">
                  <div className="d-block d-md-inline-block mb-3 mb-lg-0">
                    <img src={team1} alt="Image" className="img-fluid image rounded-circle" /><span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">Sea Hawlks </span>
                  </div>
                  <span className="text-muted mx-3 text-normal mb-3 mb-lg-0 d-block d-md-inline ">vs</span>
                  <div className="d-block d-md-inline-block">
                    <img src="images/img_3_sq.jpg" alt="Image" className="img-fluid image rounded-circle" /><span className="d-block d-md-inline-block ml-0 ml-md-3 ml-lg-0">Patriots</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="bg-image overlay-success rounded mb-5" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}} data-stellar-background-ratio="0.5">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                  <div className="text-center text-lg-left">
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image mx-auto mb-3 mb-lg-0 mr-lg-3">
                        <img src={quilmes} alt="Image" className="img-fluid" />
                      </div>
                      <div className="text">
                        <h3 className="h5 mb-0 text-black">Quilmes</h3>
                        <span className="text-uppercase small country text-black">Argentina</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 text-center mb-4 mb-lg-0">
                  <div className="d-inline-block">
                    <p className="mb-2"><small className="text-uppercase text-black font-weight-bold">Fase de grupos - Fecha 4</small></p>
                    <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h3">3:2</span></div>
                    <p className="mb-0"><small className="text-uppercase text-black font-weight-bold">10 de Abril / 7:30 AM</small></p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 text-center text-lg-right">
                  <div className>
                    <div className="d-block d-lg-flex align-items-center">
                      <div className="image mx-auto ml-lg-3 mb-3 mb-lg-0 order-2">
                        <img src={boca} alt="Image" className="img-fluid" />
                      </div>
                      <div className="text order-1">
                        <h3 className="h5 mb-0 text-black">Boca</h3>
                        <span className="text-uppercase small country text-black">Argentina</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Tabla de Posiciones</h2>
            <TablePositions />
            <Matches />
            {/*<div className="row">
              <div className="col-md-12">
                <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Fechas anteriores</h2>
                <div className="site-block-tab">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Fecha 1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Fecha 2</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Fecha 3</a>
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
                                    <h3 className="h5 mb-0 text-black">Racing</h3>
                                    <span className="text-uppercase small country">Argentina</span>
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
                                    <h3 className="h5 mb-0 text-black">Rosario Central</h3>
                                    <span className="text-uppercase small country">Argentina</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          

                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                                   <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div> 
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Palmeiras</h3>
                                    <span className="text-uppercase small country">Brasil</span>
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
                                    <h3 className="h5 mb-0 text-black">Barcelona</h3>
                                    <span className="text-uppercase small country">España</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          

                          <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                            <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                              <div className="text-center text-lg-left">
                                <div className="d-block d-lg-flex align-items-center">
                               <div className="image image-small text-center mb-3 mb-lg-0 mr-lg-3">
                                    <img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                                  </div> 
                                  <div className="text">
                                    <h3 className="h5 mb-0 text-black">Peñarol</h3>
                                    <span className="text-uppercase small country">Uruguay</span>
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
                                    <h3 className="h5 mb-0 text-black">Napoli</h3>
                                    <span className="text-uppercase small country">Italia</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>*/}
          </div>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;