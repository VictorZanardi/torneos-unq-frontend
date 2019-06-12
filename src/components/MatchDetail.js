import React, { Component } from 'react';
import '../images/favicon.ico';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../vendor/animate/animate.css'
import '../vendor/select2/select2.min.css'
import '../vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../css/utilTable.css'
import '../css/mainTable.css'

import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MatchDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            teamAId: this.props.match.params.teamAId,
            teamBId: this.props.match.params.teamBId,
            match: {},
            teamA: [],
            teamB: [],
            smShow: false
        };
    }

    componentWillMount() {

        fetch('/api/matchBy/' + this.state.id)
            .then(response => response.json())
            .then(data => this.setState({ match: data }))
            .catch(error => { console.log(error.response) });

        fetch('/api/teamBy/' + this.state.teamBId)
            .then(response => response.json())
            .then(data => this.setState({ teamA: data }))
            .catch(error => { console.log(error.response) });

        fetch('/api/teamBy/' + this.state.teamBId)
            .then(response => response.json())
            .then(data => this.setState({ teamB: data }))
            .catch(error => { console.log(error.response) });
    }

    render() {

        const { teamA } = this.state;
        const { match } = this.state;
        let smClose = () => this.setState({ smShow: false });

        return (
            <div>
                <Header />
                <div class="limiter">

                    <div class="container-table100">
                        <h1></h1>
                        <div class="wrap-table100">
                            <div class="table100 ver1">
                                <div class="table100-firstcol">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1"> Nombre y Apellido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamA.map((playerA) =>
                                                <tr class="row100 body">
                                                    <td class="cell100 column1"> <input type="text" value={playerA.name + " " + playerA.lastName} readonly="readonly" /></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="wrap-table100-nextcols js-pscroll">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr class="row100 head">
                                                    <th class="cell100 column2">Foto</th>
                                                    <th class="cell100 column3">DNI</th>
                                                    <th class="cell100 column4">Goles</th>
                                                    <th class="cell100 column5">Tarjeta Amarilla</th>
                                                    <th class="cell100 column6">Tarjeta Roja</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {teamA.map((playerA, index) =>


                                                    <tr class="row100 body">
                                                        <td class="cell100 column2">

                                                            <Button variant="danger" onClick={() => this.setState({ smShow: true })}>
                                                                Ver Foto
                                                            </Button>

                                                            <Modal size="sm" show={this.state.smShow} onHide={smClose} aria-labelledby="example-modal-sizes-title-sm">
                                                                <Modal.Body>
                                                                    <img src={'data:image/jpeg;base64,' + playerA.photo}></img>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                </Modal.Footer>
                                                            </Modal>
                                                        </td>
                                                        <td class="cell100 column3">{playerA.dni}</td>
                                                        <td class="cell100 column4">
                                                            <input id="goals" name="goals" type="number" min="0" pattern="^[0-9]+" />
                                                        </td>
                                                        <td class="cell100 column5">
                                                            <input id="yellowCard" name="yellowCard" type="number" min="0" max="2" pattern="^[0-2]+" />
                                                        </td>
                                                        <td class="cell100 column6">
                                                            <input id="redCard" name="redCard" type="number" min="0" max="1" pattern="^[0-1]+" />
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="js/main.js"></script>
                <Footer />
            </div>
        );
    }

} export default MatchDetail;
