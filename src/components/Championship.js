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
import Moment from 'react-moment';
import { TiEdit } from "react-icons/ti";
import Button from 'react-bootstrap/Button';

class Championship extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      championships: []
    };
  }

  componentDidMount() {
    fetch('/api/championships')
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
      <div  style={{marginLeft:10}}>
        <Link to= {"/NewChampionship"} id="NewChampionship" className="btn btn-primary"  style={{marginRight:10}}>Crear Torneo</Link>
        <Link to= {"/TeamsChampionship"} className="btn btn-primary">Agregar Equipos</Link>      
      </div> <br/>
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
              <StyledTableCell  component="th" scope="row" align="center">
                {championship.name}
              </StyledTableCell>
              <StyledTableCell align="center">{championship.description}</StyledTableCell>
              <StyledTableCell align="center">
                <Moment format="DD/MM/YYYY">
                {championship.startDate}
               </Moment>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Moment format="DD/MM/YYYY">
                {championship.finishDate}
               </Moment>
              </StyledTableCell>              
              <StyledTableCell align="center">
              <Link to= {"/EditChampionship"}>
              <Button variant="info">
                <TiEdit />
              </Button>
              </Link>
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