import Table from 'react-bootstrap/Table'
import * as React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button'

class Fixture extends React.Component{

constructor(props) {
    super(props);

    this.state = {
        fixture: [],
        };
    }

    fixtureGenerate()
    {
      fetch('/api/fixtureGenerate')
      .then(function (response) {
        alert("Fixture Generado Automaticamente!!!");
        window.location.reload();
      });
    }
componentDidMount = () => {
    fetch('/api/fixture')
    .then(response => response.json())
    .then(data => this.setState({fixture: data}))
    .catch(error => {console.log(error.response)});
    }

render(){
    const {fixture} = this.state;
    var gamesHtml = [];

    if (fixture.length > 0)
    {
      gamesHtml.push(fixture.map(game => (
        <tr>
        <td>{game.matchweek}</td>
        <td>{game.teamA.name}</td>
        <td>{game.teamB.name}</td>
        <td>{game.date}</td>
        </tr>
      )) )
    }
    return(
<div>
    <Header/>
    <br/>
    <br/>
    <div>
     <div style={{marginLeft:10}}>    
         <Button variant="primary" onClick={this.fixtureGenerate}>Crear Fixture</Button>
    </div>
    <br/>
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>Fecha</th>
            <th>Equipo 1</th>
            <th>Equipo 2</th>
            <th>Dia de Partido</th>
            </tr>
        </thead>
        <tbody>
        {
          gamesHtml
        }
        </tbody>
    </Table>
    </div>
</div>
    )
  }   
}

export default Fixture;