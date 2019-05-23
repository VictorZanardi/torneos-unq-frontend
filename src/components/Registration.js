import * as React from 'react';
import axios from "axios/index";
import { IoIosAddCircle } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CreatePlayer.css';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: undefined,
                password: undefined,
                passwordConfirm: undefined
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('api/registration',this.state.user)
        .then(function (response) {
            console.log(response);
        })
        .catch(error => {console.log(error.response)}); 
    }

    updateState = (name,event) => {
        let newUser = Object.assign({},this.state.user);
        newUser[name] = event.target.value;
        this.setState({user:newUser});
    };

    render() {

        return (

            <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="username">User name</label>
                    <input id="username" name="username" type="text" value={this.state.user.username} onChange={this.updateState.bind(this,'username')}/>
                    <br/>

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" value={this.state.user.password} type="text"  onChange={this.updateState.bind(this,'password')}/>
                    <br/>      

                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    <input id="passwordConfirm" name="passwordConfirm" value={this.state.user.passwordConfirm} type="text" onChange={this.updateState.bind(this,'passwordConfirm')} />
                    <br/>

                    <button type="submit" id="submit" name="submit" class="form-btn semibold"> Registrarse</button>
                </form>

        );
    }

}
export default Registration;