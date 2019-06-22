import Table from 'react-bootstrap/Table'
import * as React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Fixture extends React.Component{

constructor(props) {
    super(props);

    this.state = {
        fixtures: [],
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
    .then(data => this.setState({fixtures: data}))
    .catch(error => {console.log(error.response)});
    }

render(){
  
    const {fixtures} = this.state;
    var gamesHtml = [];

    if (fixtures.length > 0)
    {
      gamesHtml.push(fixtures.map(fixture => (
        <tr>
        <th style={{textAlign:"center"}}>{fixture.matchDateNumber}</th>
        <td style={{textAlign:"center",backgroundColor: "lightblue"}}>{fixture.games.map(game =>
            <Form>
            <Row>
              <Col lg >
                {game.teamA.name}
              </Col>
              -
              <Col xs>
                {game.teamB.name}
              </Col>
            </Row>
          </Form>
            // <span style={{alignContent:"center"}}> {game.teamA.name} - {game.teamB.name} <br></br></span>
        )}</td>
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
    <Table striped bordered hover style={{margin: "auto",width: "600px",bordercollapse: "collapse",border: "1px solid #fff", /*for older IE*/
	borderstyle: "hidden"}}>
        <thead>
            <tr>
            <th style={{textAlign:"center",backgroundColor: "lightblue"}}>Fecha</th>
            <th style={{textAlign:"center"}}>Partidos</th>
            <th style={{textAlign:"center"}}>Dia de Partido</th>
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