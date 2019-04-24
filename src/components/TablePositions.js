import React, { Component } from 'react';
import axios from 'axios';

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
    		<div>

    		<table class="position">

              <tr>
                <th scope="row">Pts</th>
                <th>Pj</th>
                <th>Pg</th>
                <th>Pe</th>
                <th>Pp</th>
                <th>Gf</th>
                <th>Ge</th>
                <th>Dif</th>
              </tr>

            {positions.map((position) =>

            	<tr>
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

            </table>

    		</div>
    	);
    }

}export default TablePositions;