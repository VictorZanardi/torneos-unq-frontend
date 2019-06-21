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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TiDelete } from "react-icons/ti";
import axios from 'axios';

class Championship extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      championships: [],
      smShow: false
    };
  }

  componentDidMount() {
    fetch('/api/championships')
        .then(response => response.json())
        .then(data => this.setState({championships: data}));
}

  deleteChampionship(id)
  {
    axios.delete('/api/deleteChampionship/' + id)
    .then(function (response) {
      alert("Torneo Eliminado!!!");
      window.location.reload();
    });
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
  let smClose = () => this.setState({ smShow: false });
  var championshipsHtml = [];

  if(championships.length > 0){
    championshipsHtml.push(
      championships.map(championship => (
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
          <Link to= {"/EditChampionship/" + championship.id}>
          <Button variant="info">
            <TiEdit />
          </Button>
          </Link>
        <span> </span>
          <Button variant="danger" onClick={() => this.setState({ smShow: true })}>
                    <TiDelete />
            </Button>
          </StyledTableCell>
              <Modal centered="true" class="modal-dialog modal-sm" show={this.state.smShow} onHide={smClose} aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Body>
                      ¿Esta seguro de eliminar el torneo?
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={smClose}> No </Button>
                      <Button variant="danger" onClick={this.deleteChampionship.bind(this, championship.id)}>Si</Button>
                    </Modal.Footer>
              </Modal>
        </StyledTableRow>
      ))
    );
  } else {
    championshipsHtml.push(
      <h1> No se encontraron torneos, por favor genere uno</h1>
    );
  }

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
          {championshipsHtml}
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