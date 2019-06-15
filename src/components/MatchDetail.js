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
            match: [],
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

        axios.get('/api/teamBy/' + this.state.teamAId)
            .then(response => { 
                if (response.status == 200) {
                    
                    var listData = response.data;
                    var statisticTeam = []
                    for (var i = 0; i < listData.length; i++) {
                        var current = listData[i]
                        statisticTeam.push(
                            {
                                name: current.name,
                                lastName: current.lastName,
                                dni: current.dni,
                                photo: current.photo,
                                goals: 0,
                                yellowCard: 0,
                                redCard: 0
                            }
                        )
                    }
                    this.setState({ teamA: statisticTeam });
                }
            })    
            .catch(error => { console.log(error.response) });


        axios.get('/api/teamBy/' + this.state.teamBId)
            .then(response => { 
                if (response.status == 200) {
                    
                    var listData = response.data;
                    var statisticTeam = []
                    for (var i = 0; i < listData.length; i++) {
                        var current = listData[i]
                        statisticTeam.push(
                            {
                                name: current.name,
                                lastName: current.lastName,
                                dni: current.dni,
                                photo: current.photo,
                                goals: 0,
                                yellowCard: 0,
                                redCard: 0
                            }
                        )
                    }
                    this.setState({ teamB: statisticTeam });
                }
            })    
            .catch(error => { console.log(error.response) });

    }

    updateState = (name,index,typeTeam,event) => {

        if(typeTeam == "teamA"){
            let newTeamA = Object.assign([],this.state.teamA);
            newTeamA[index][name] = parseInt(event.target.value);
            this.setState({ teamA: newTeamA});
        } else {
            let newTeamB = Object.assign([],this.state.teamB);
            newTeamB[index][name] = parseInt(event.target.value);
            this.setState({ teamB: newTeamB});
        }

    };

    render() {

        const { teamA } = this.state;
        const { teamB } = this.state;
        const { match } = this.state;
        let smClose = () => this.setState({ smShow: false });
        console.log(match);

        return (
            <div>
                <Header />
                <div class="limiter">
                    <div class="container-table100">
                        <h1>LOS VAGOS</h1>
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
                                            {teamA.map((playerA,index) =>
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
                                                        </td>
                                                        <td class="cell100 column3">{playerA.dni}</td>
                                                        <td class="cell100 column4">
                                                            <input id="goals" name="goals" type="number" min="0" pattern="^[0-9]+" value={playerA.goals} onChange={this.updateState.bind(this,"goals",index,"teamA")} />
                                                        </td>
                                                        <td class="cell100 column5">
                                                            <input id="yellowCard" name="yellowCard" type="number" min="0" max="2" pattern="^[0-2]+" value={playerA.yellowCard} onChange={this.updateState.bind(this,"yellowCard","teamA")}/>
                                                        </td>
                                                        <td class="cell100 column6">
                                                            <input id="redCard" name="redCard" type="number" min="0" max="1" pattern="^[0-1]+" value={playerA.redCard} onChange={this.updateState.bind(this,"redCard","teamA")}/>
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

                <div class="limiter">
                    <div class="container-table100">
                        <h1>LOS PERROS</h1>
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
                                            {teamB.map((playerB) =>
                                                <tr class="row100 body">
                                                    <td class="cell100 column1"> <input type="text" value={playerB.name + " " + playerB.lastName} readonly="readonly" /></td>
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

                                                {teamB.map((playerB, index) =>

                                                    <tr class="row100 body">
                                                        <td class="cell100 column2">
                                                            <Button variant="danger" onClick={() => this.setState({ smShow: true })}>
                                                                Ver Foto 
                                                            </Button>
                                                        </td>
                                                        <td class="cell100 column3">{playerB.dni}</td>
                                                        <td class="cell100 column4">
                                                            <input id="goals" name="goals" type="number" min="0" pattern="^[0-9]+" value={playerB.goals} onChange={this.updateState.bind(this,"goals",index,"playerB")} />
                                                        </td>
                                                        <td class="cell100 column5">
                                                            <input id="yellowCard" name="yellowCard" type="number" min="0" max="2" pattern="^[0-2]+" value={playerB.yellowCard} onChange={this.updateState.bind(this,"yellowCard","playerB")}/>
                                                        </td>
                                                        <td class="cell100 column6">
                                                            <input id="redCard" name="redCard" type="number" min="0" max="1" pattern="^[0-1]+" value={playerB.redCard} onChange={this.updateState.bind(this,"redCard","playerB")}/>
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
