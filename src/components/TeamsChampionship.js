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
import { SnackbarContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';

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
      teams: [],
      message: ''
    };
  }
  
  componentDidMount() {
    this.selectedTeams = [];
    
  }

  componentWillMount = () => {
    fetch('/api/teamsNotAssigned')
    .then(response => response.json())
    .then(data => this.setState({teams: data}))
    .catch(error => {console.log(error.response)});
  }

  handleAllChecked = (event) => {
    let teams = this.state.teams
    teams.forEach(team => team.isChecked = event.target.checked) 
    this.setState({teams: teams})
  }

  handleCheckChieldElement = (event) => {
    let teams = this.state.teams
    teams.forEach(team => {
       if (team.name === event.target.name)
          team.isChecked =  event.target.checked
    })
    this.setState({teams: teams})
  }

  handleSubmit = (event) => {
    let teams = this.state.teams
    if (teams.length == 0)
    {
      this.setState({openErrorModal : true,message: "Todos los equipos se encuentran agregados al torneo"})
    }
    else{
      teams.forEach(team => {
        if(team.isChecked)
        {
         this.selectedTeams.push(team.id);
        }
      })

    if(this.selectedTeams.length == 0)
    {
    this.setState({openErrorModal : true,message:"Debe seleccionar al menos un equipo antes de guardar"});
    }
    else
    {
      event.preventDefault();
      axios.post('/api/addTeams/',this.selectedTeams)
      .then(function (response) {
          window.location.replace('./Championship');
      })
      .catch(error => {console.log(error.response)});
      }
    }
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseModal = () => {
    this.setState({ openErrorModal: false });
  };

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

    const {teams,message} = this.state;

    return (
      <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.openErrorModal}
        autoHideDuration={3000}
        onClose={this.handleCloseModal}
      >     
        <SnackbarContent
          variant="error"
          message={<label><ErrorIcon/> {message}</label>}
          style={{backgroundColor: "red"}}
        />
      </Snackbar>
      <React.Fragment>
          <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Agregar equipos al torneo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Seleccionar Todo
        {
          teams.map(team => (
                 <label>
                 <input type="checkbox" key={team.id} id= {team.id} name={team.name} onClick={this.handleCheckChieldElement} checked={team.isChecked} value={team.value}/>
                 {team.name}
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
      </div>
    );
  }
}

export default TeamsChampionship;