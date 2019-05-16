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
import './EditPlayer.css';

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

     
      
  render() {
    
    const {players} = this.state;
    return (
      <div>
      <Header/>

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
                  {/* <span className="team-number">10</span> */}
                  <a ><img src={'data:image/jpeg;base64,' + player.photo} alt="Image" className="img-fluid image rounded-circle" /></a>
                  <h2>{player.name}</h2>
                  <h2>{player.lastName}</h2>
                  <h2>{'DNI: '+ player.dni}</h2>
                  <label className="btn btn-primary">
                    <span>Cargar Foto</span>
                    <input style={{display:"none"}} id="file" type="file" onChange={(evt) => this.handleUploadFile(evt, player.id)}></input>
                  </label>
                  <EditPlayer id={player.id}/>
                </div>
                </div>
            )}
         </div>
       </div>
     </div>

     <Footer/>
   </div>

    );
  }
}

export default TeamDetail;
