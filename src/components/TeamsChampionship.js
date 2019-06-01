import * as React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const useStyles = ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: 3,
  },
});



class TeamsChampionship extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      teams: [],
      idTeams: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(this.state.idTeams.push(e.target.id))
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/addTeams/'+this.state.idTeams)
    .then(function (response) {
        window.location.reload();
    })
    .catch(error => {console.log(error.response)});
  }

  componentDidMount() {
    fetch('/api/teams')
        .then(response => response.json())
        .then(data => this.setState({teams: data}))
        .catch(error => {console.log(error.response)});
}

redirect = () => {
  return <Redirect to='./Championship' />
};

  render() {

    const StyledTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 26,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    
    const StyledTableRow = withStyles(theme => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    }))(TableRow);

    const {teams} = this.state;

    return (
      <React.Fragment>
          <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Agregar equipos al torneo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          teams.map(team => (
                 <label>
                 {team.name}
                 <Checkbox id= {team.id} name={team.name} checked={this.state.checkedItems.get(team.name)} onChange={this.handleChange} />
               </label>
          ))
        }
        </TableBody>
      </Table>
      <br/>
       <Button variant="contained" color="primary" onClick={this.handleSubmit} style={{marginRight: 10}}> 
          Guardar
        </Button>
        <Link to={"./Championship"}>
        <Button variant="contained" color="secondary" >
          Volver
        </Button>  
        </Link>
      </React.Fragment>
    );
  }
}

export default TeamsChampionship;