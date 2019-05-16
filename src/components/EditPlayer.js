import * as React from 'react';
import axios from "axios/index";
import Popup from "reactjs-popup";

class EditPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {},
            id: this.props.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/playerById/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({player: data}));
    }

    updateState = (name,event) => {
        let newPlayer = Object.assign({},this.state.player);
        newPlayer[name] = event.target.value;
        this.setState({player:newPlayer});
    };

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8080/api/playerUpdate/'+this.state.id,this.state.player)
        .then(function (response) {
            window.location.reload();
        });
    }

    render() {

        return (

            <Popup trigger={<button className="btn btn-primary">Editar</button>} position="right center">

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" type="text" value={this.state.player.name} onChange={this.updateState.bind(this,'name')}/>

                    <label htmlFor="lastName">Apellido</label>
                    <input id="lastName" name="lastName" value={this.state.player.lastName} type="text"  onChange={this.updateState.bind(this,'lastName')}/>

                    <label htmlFor="dni">DNI</label>
                    <input id="dni" name="dni" value={this.state.player.dni} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'dni')} />

                    <label htmlFor="birthdate">Fecha de Nacimiento</label>
                    <input id="birthdate" name="birthdate" value={this.state.player.birthdate} type="date" onChange={this.updateState.bind(this,'birthdate')} />
                    <br/>

                    <button>Guardar Cambios</button> 
                </form>
               
            </Popup>
        );
    }
}
export default EditPlayer;
