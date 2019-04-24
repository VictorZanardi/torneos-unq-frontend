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
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import logo from './Logo.png'; 

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: "url(" +"https://www.hoysejuega.com/uploads/cgblog/id462/Amateurismo_universitario.jpg" + ")"
};

class TeamDetail extends Component {


  constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            name: this.props.match.params.name,
            players: [],
            idPlayer:null
        };
    }

      componentDidMount() {
        fetch('http://localhost:8080/api/TeamBy/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({players: data}));
      }

      getRestClient() {
        if (!this.serviceInstance) {
          this.serviceInstance = axios.create({
            baseURL: 'http://localhost:8080/api',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
              },
          });
        }
        return this.serviceInstance;
      }
      
      uploadFileToServer(data,idPlayer){
        //returns Promise object
        //const obj = { image: data, id: idPlayer };
        console.log(idPlayer);
        return this.getRestClient().post('/uploadPhoto/'+idPlayer,data);
      }

      handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Subiendo archivo", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        let self = this;
        //calling async Promise and handling response or error situation
        this.uploadFileToServer(data,this.state.idPlayer).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
                //some other error happened
               console.log("Upload error. HTTP error/status code=",error.message);
            }
        });
      };

  render() {

    const {players} = this.state;

    return (
      <div>
     <meta charSet="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

   <div className="site-wrap">
     <div className="site-mobile-menu">
       <div className="site-mobile-menu-header">
         <div className="site-mobile-menu-logo">
           <a href="/"><img src={logo} alt="Image" /></a>
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
               <a href="https://www.facebook.com/UNQDeportes" className="text-secondary px-2 pl-0"><span className="icon-facebook" /></a>
               <a href="#" className="text-secondary px-2"><span className="icon-instagram" /></a>
               <a href="#" className="text-secondary px-2"><span className="icon-twitter" /></a>
               <a href="#" className="text-secondary px-2"><span className="icon-linkedin" /></a>
             </div>
             <div className="col-6 col-md-9 text-right">
             <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-envelope mr-3" /> <span className="d-none d-md-block">deportes@unq.edu.ar</span></a></div>
             <div className="d-inline-block"><a href="#" className="text-secondary p-2 d-flex align-items-center"><span className="icon-phone mr-0 mr-md-3" /> <span className="d-none d-md-block">+54 11 4365-7100 int. 5313 </span></a></div>
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
             <li> {/*className="has-children active"*/}
                  <a href="/">Inicio</a>
                  {/* <ul className="dropdown arrow-top">
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
                  </ul> */}
                </li>
                <li> {/*className="has-children"*/}
                  <a href="#">Noticias</a>
                  {/* <ul className="dropdown arrow-top">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                  </ul> */}
                </li> 
                <li><a href="#">Partidos</a></li>
                <li><a href="/TeamsList">Equipos</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="/LoadTeam">Cargar Equipo</a></li>
           </ul>
         </div>
       </nav>
     </header>

     <div className="site-section">
       <div className="container">
         <div className="row">
           <div className="col-md-12 text-center mb-5">
             <h2 className="text-black">{this.state.name}</h2>
           </div>
         </div>
        
         <div className="row">
            {players.map((player) =>
              <div className="mb-4 mb-lg-0 col-6 col-md-4 col-lg-2 text-center">
                <div className="player mb-5">
                  <span className="team-number">10</span>
                  <div>
                    {this.state.idPlayer = player.id}
                    <input type="file" onChange={this.handleUploadFile} />
                  </div>
                  {/* <a ><img src={player.photo} alt="Image" className="img-fluid image rounded-circle" /></a> */}
                  <img src={player.photo}></img>
                  <h2>{player.name}</h2>
                  <h2>{player.lastName}</h2>
                  <h2>{'DNI: '+ player.dni}</h2>
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
                  <h3 className="footer-heading mb-4">Torneos Internos</h3>
                  <p>El deporte y la actividad física constituyen derechos que deben ser garantizados en todo el territorio nacional en tanto prácticas que promuevan la inclusión social, la integración y el desarrollo humano integral.</p>
                </div>

              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Menu Rápido</h3>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Inicio</a></li>
                      <li><a href="#">Partidos</a></li>
                      <li><a href="#">Noticias</a></li>
                      <li><a href="#">Equipos</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="list-unstyled">
                      <li><a href="#">Acerca de</a></li>
                      <li><a href="#">Politicas de Privacidad</a></li>
                      <li><a href="#">Contactenos</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Seguinos en Redes Sociales</h3>
                    <div>
                      <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                      <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © Todos los derechos reservados<i className="icon-heart-o" aria-hidden="true" /> by <a href="https://www.unq.edu.ar" target="_blank">UNQ</a>
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

export default TeamDetail;
