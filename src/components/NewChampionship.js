import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  textField: {
      height: 800
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class NewChampionship extends React.Component {
  
constructor(props) { 
  super(props);
  this.state = {
    open: true,
    championship: {
      name: "",
      description: "",
      startDate: undefined,
      finishDate: undefined,
    }
  };  
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClose = this.handleClose.bind(this);   
};

handleSubmit(event){
  event.preventDefault();
  axios.post('api/championshipCreate/'+this.state.championship)
  .then(function (response) {
      window.location.reload();
  });
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  redirect = () => {
    return <Redirect to='./Championship' />
  };

  updateState = (name,event) => {
      let newChampionship = Object.assign({},this.state.championship);
      newChampionship[name] = event.target.value;
      this.setState({championship:newChampionship});
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Crear Torneo
        </Button> */}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} style={{backgroundColor:"#d50000"}} >
            <Toolbar>
            <Link to={"./Championship"} style={{color:"inherit"}}>            
              <IconButton color="inherit"  aria-label="Close">
              <CloseIcon/>
              </IconButton>
              </Link>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Crear Torneo
              </Typography>
              <Button color="inherit" onClick={this.handleSubmit}>
                Guardar
              </Button>
            </Toolbar>
          </AppBar>
          <List>
           <ListItem >
              <Input
                label="Nombre"
                placeholder="Ingrese un nombre para el torneo"
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
                fullWidth
                onChange={this.updateState.bind(this,'name')}
                value={this.state.championship.name}
              />
            </ListItem>
            <Divider />
            <ListItem >
              <Input
                label="Descripción"
                placeholder="Ingrese una descripción"
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
                fullWidth
                onChange={this.updateState.bind(this,'description')}
                value={this.state.championship.description}
              />
            </ListItem>
            <Divider />
            <ListItemText >
            <label htmlFor="startDate">Fecha Inicio</label>
            <input
                id="startDate"
                type="date"
                label="Fecha Finalizacion"
                onChange={this.updateState.bind(this,'startDate')}
              />
            </ListItemText>
            <Divider />
            <ListItemText>
            <label htmlFor="finishDate">Fecha Finalizacion</label>
            <input
                id="finishDate"
                type="date"
                label="Fecha Finalizacion"
                defaultValue="2019-01-01"
                onChange={this.updateState.bind(this,'finishDate')}
                value={this.state.championship.finishDate}
              />
            </ListItemText>
          </List>
        </Dialog>
      </div>
    );
  }
}

NewChampionship.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewChampionship);
