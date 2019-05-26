import React, { Component } from 'react';
import '../css/style.css';
import '../fonts/icomoon/style.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/owl.theme.default.min.css';
import '../css/aos.css';
import '../css/style.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import EditPlayer from './EditPlayer';
import CreatePlayer from './CreatePlayer';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TiDelete } from "react-icons/ti";

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
            smShow: false
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
        return this.getRestClient().post('/uploadPhoto/'+idPlayer,data);
      }

      handleUploadFile = (event,idPlayer) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Subiendo archivo", event.target.files[0]);
        data.append('file', event.target.files[0]);
        let self = this;
        //calling async Promise and handling response or error situation
        this.uploadFileToServer(data,idPlayer).then((response) => {
            console.log("File " + file.name + " is uploaded");
        window.location.reload();   
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

      delete(id){
        axios.delete('http://localhost:8080/api/deletePlayer/'+id)
            .then(function (response) {
                alert("Subasta Eliminada!!!");
                window.location.reload();
            });
      }
     
      
  render() {
    
    const {players} = this.state;
    let smClose = () => this.setState({ smShow: false });

    return (
      <div>
      <Header/>

     <div className="site-section">
       <div className="container">
         <div className="row">
           <div className="col-md-12 text-center mb-5">
             <h1 className="text-black">{this.state.name}</h1>
           </div>
         </div>
        
         <CardColumns>
            {players.map((player) =>

                  <Card>
                    <blockquote className="blockquote mb-0 card-body">
                    <Card.Img variant="top" src={'data:image/jpeg;base64,' + player.photo} />
                    <Card.Body>
                      <Card.Title>{player.name}</Card.Title>
                      <Card.Title>{player.lastName}</Card.Title>
                      <Card.Title>{'DNI: '+ player.dni}</Card.Title>
                      <label className="btn btn-warning">
                        <span>Cargar Foto</span>
                        <input style={{display:"none"}} id="file" type="file" onChange={(evt) => this.handleUploadFile(evt, player.id)}></input>
                      </label>
                      <br/>
                      <EditPlayer id={player.id}/>

                        <Button variant="danger" onClick={() => this.setState({ smShow: true })}>
                          <TiDelete/>
                        </Button>

                        <Modal size="sm" show={this.state.smShow} onHide={smClose} aria-labelledby="example-modal-sizes-title-sm">
                          <Modal.Body>
                            ¿DESEA BORRAR EL JUGADOR?
                          </Modal.Body>
                          <Modal.Footer>
                          <Button variant="secondary" onClick={smClose}> NO </Button>
                            <Button variant="primary" onClick={this.delete.bind(this, player.id)}>SI</Button>
                          </Modal.Footer>
                        </Modal>

                    </Card.Body>
                    </blockquote>
                  </Card>
                
            )}
            </CardColumns>
         <Card>
         <CreatePlayer idTeam={this.state.id}/>
         </Card>
       </div>
     </div>
     <Footer/>
   </div>

    );
  }
}

export default TeamDetail;
