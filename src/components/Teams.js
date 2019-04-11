import React, { Component } from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css'
import '../css/bootstrap.min.css'
import '../css/magnific-popup.css'
import '../css/owl.theme.default.min.css'
import '../css/aos.css'
import '../css/style.css'
import axios from 'axios';
import image from '../images/img_1_sq.jpg';
import imageBanner from '../images/hero_bg_3.jpg';

class Teams extends Component {

  constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
            id:this.props.match.params.id,
            players: [],
        };
    }

      componentDidMount() {
        fetch('http://localhost:8080/api/TeamBy/1')
            .then(response => response.json())
            .then(data => this.setState({players: data}));
      }

  render() {
    const {players} = this.state;
    console.log(players);

    return (
      <div>

     <title>Sportz — Colorlib Sports Team Template</title>
     <meta charSet="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

   <div className="site-wrap">
     <div className="site-mobile-menu">
       <div className="site-mobile-menu-header">
         <div className="site-mobile-menu-logo">
           <a href="#"><img src="../images/Logo.png" alt="Image" /></a>
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
             <a href="index.html"><img src="images/logo.png" alt /></a>
           </div>
           <div className="d-inline-block d-md-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
           <ul className="site-menu js-clone-nav d-none d-md-block">
             <li className="has-children">
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
             <li className="active"><a href="/Teams">Teams</a></li>
             <li><a href="about.html">About</a></li>
             <li><a href="contact.html">Contact</a></li>
           </ul>
         </div>
       </nav>
     </header>
     <div className="site-blocks-cover overlay" style={{backgroundImage: <img src={imageBanner} alt="Image"/>}} data-aos="fade" data-stellar-background-ratio="0.5">
       <div className="container">
         <div className="row align-items-center justify-content-start">
           <div className="col-md-6 text-center text-md-left" data-aos="fade-up" data-aos-delay={400}>
             <h1 className="bg-text-line">Meet The Team</h1>
             <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime velit nostrum praesentium voluptatem. Mollitia perferendis dolore dolores.</p>
           </div>
         </div>
       </div>
     </div>


     <div className="site-section">
       <div className="container">
         <div className="row">
           <div className="col-md-12 text-center mb-5">
             <h2 className="text-black">Team</h2>
           </div>
         </div>
         <div className="row">
            {players.map((player) =>
              <div className="mb-4 mb-lg-0 col-6 col-md-4 col-lg-2 text-center">
                <div className="player mb-5">
                  <span className="team-number">10</span>
                  <a ><img src={image} alt="Image" className="img-fluid image rounded-circle" /></a>
                  <h2>{ player.name}</h2>
                  <h2>{ player.lastName}</h2>
                  <span className="position">Coach</span>
                </div>
                </div>
            )}

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
   <p/>
 </div>

      );
    }
  }

export default Teams;
