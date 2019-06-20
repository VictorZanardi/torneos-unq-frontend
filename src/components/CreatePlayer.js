import * as React from 'react';
import axios from "axios/index";
import { IoIosAddCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CreatePlayer.css';

class CreatePlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                name: undefined,
                lastName: undefined,
                dni: undefined,
                birthdate: undefined
            },
            idTeam: this.props.idTeam,
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);   
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/playerCreate/'+this.state.idTeam,this.state.player)
        .then(function (response) {
            window.location.reload();
        })
        .catch(error => {console.log(error.response)});
    }

    updateState = (name,event) => {
        let newPlayer = Object.assign({},this.state.player);
        newPlayer[name] = event.target.value;
        this.setState({player:newPlayer});
    };

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <>
            <Button variant="success" onClick={this.handleShow}>
                <IoIosAddCircle />
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}  centered="true">
                <Modal.Header closeButton>
                    <Modal.Title>Crear Jugador</Modal.Title>
                </Modal.Header>
            <Modal.Body>  
                <form className="formCreatePlayer"> 
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" value={this.state.player.name} onChange={this.updateState.bind(this,'name')}/>
                    <br/>

                    <label htmlFor="lastName">Apellido</label>
                    <input id="lastName" name="lastName" value={this.state.player.lastName} type="text"  onChange={this.updateState.bind(this,'lastName')}/>
                    <br/>      

                    <label htmlFor="dni">DNI</label>
                    <input id="dni" name="dni" value={this.state.player.dni} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'dni')} />
                    <br/>

                    <label htmlFor="birthdate">Fecha de Nacimiento</label>
                    <input id="birthdate" name="birthdate" value={this.state.player.birthdate} type="date" onChange={this.updateState.bind(this,'birthdate')} />
                    <br/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Salir
                </Button>
                <Button variant="primary" onClick={this.handleSubmit}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
        );
    }
}
export default CreatePlayer;
