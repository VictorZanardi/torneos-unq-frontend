import React, { Component } from 'react';
import axios from 'axios';
import './TablePositions.css';

class TablePositions extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            positions: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/tablePositions')
            .then(response => response.json())
            .then(data => this.setState({positions: data}));
    }

    render() {

    	const {positions} = this.state;

    	return (
    		<table class="table">

    		<thead class="thead-dark">
              <tr>
              	<th scope="col">#</th>
              	<th scope="col">Equipo</th>
                <th scope="col">Pts</th>
                <th scope="col">Pj</th>
                <th scope="col">Pg</th>
                <th scope="col">Pe</th>
                <th scope="col">Pp</th>
                <th scope="col">Gf</th>
                <th scope="col">Ge</th>
                <th scope="col">Dif</th>
              </tr>
            </thead>

            <tbody>
            {positions.map((position,index) =>

            	<tr>
            		<th scope="row">{index+1}</th>
            		<td>{position.team.name}</td>
            		<td>{position.points}</td>
                	<td>{position.played}</td>
                	<td>{position.won}</td>
                	<td>{position.drawn}</td>
                	<td>{position.lost}</td>
                	<td>{position.goalsF}</td>
                	<td>{position.goalsA}</td>
                	<td>{position.goalsD}</td>
              </tr>

            )}
            </tbody>
            </table>
    	);
    }

}export default TablePositions;