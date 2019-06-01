import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class Championship extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      championships: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/championships')
        .then(response => response.json())
        .then(data => this.setState({championships: data}));
}

render() {
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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

  const classes = this.props;
  const {championships} = this.state;
    return (
  <div>
    <Header/>
    <div className="site-section">
      <div>
        <Link to= {"/NewChampionship"} id="NewChampionship" className="btn btn-primary">Crear Torneo</Link>
      </div><br/>
      <div className="container">
        <Link to= {"/TeamsChampionship"} className="btn btn-primary">Agregar Equipos</Link>
      </div><br/>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Fecha de Inicio</StyledTableCell>
            <StyledTableCell align="center">Fecha de Fin</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {championships.map(championship => (
            <StyledTableRow key={championship.name}>
              <StyledTableCell component="th" scope="row">
                {championship.name}
              </StyledTableCell>
              <StyledTableCell align="center">{championship.description}</StyledTableCell>
              {/* <StyledTableCell align="right">{championship.startDate}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{championship.finishDate}</StyledTableCell> */}
              <StyledTableCell align="center">
                <Fab color="primary" aria-label="Edit" >
                <Icon></Icon>
              </Fab>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  <Footer/>
</div>
    );
  }
}

export default Championship;