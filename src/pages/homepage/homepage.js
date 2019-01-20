/*
Home page 
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import RadioButtonField from './radiobuttonfield';
import WeightEntry from './weightentry';
import { CONSTANTS } from '../../constants/constants';
import { Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from '@material-ui/core/Icon';


const styles = (theme) => ({
  control: {
    padding: '1em',
    minHeight: '5em',
  },
  root: {
    paddingTop: '1em',
    display: 'flex',
    margin: '0 auto',
    flexWrap: 'wrap',
    maxWidth: '400px'
  },
  group: {
    margin: 'auto',
  },
  button: {
    marginTop: '.75em',
  },
  logo: {
    marginTop: '4em'
  },
  width: {
    width: '100%',
  },
  sideMargin: {
    marginLeft: '1.5em',
    marginRight: '1.5em',
  }
});

class HomePage extends React.Component {
  /*
  constants will be dictated by the radio button component
  */
  constructor (props) {
    super(props);
    this.state = { 
      gender: 'men',
      eventType: 'raw',
      liftType: 'threeLift',
      bodyWeight: '',
      total: '',
      units: 'kilos',
      ipfScore: '0.0'
    }
  };

  componentDidMount(){
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
    console.log(typeof value);

  };

  calculateScore = () => {

    if (this.state.weight === '' || this.state.total === '') return;

    var weight = Number(this.state.bodyWeight);
    var total = Number(this.state.total);

    if (isNaN(weight) || isNaN(total)) return;

    if (this.state.units === 'pounds') {
      weight = this.state.bodyWeight * 0.453592;
      total = this.state.total * 0.453592;
    };
    var constants = CONSTANTS[this.state.gender][this.state.eventType][this.state.liftType];
    var score = 500 + 100 *( total - ( constants[0] * Math.log(weight) - constants[1] ))
    / ( constants[2] * Math.log(weight) - constants[3] );
    console.log(score)
    score = Math.round(score*100)/100;
    let stringScore;
    if (score > 99999999){
      stringScore = "Stop lying ;)";
    }
    else if (isNaN(score) || score < 0){
      return;
    }
    else {
      stringScore = score.toString();
    }
    console.log(stringScore)
    this.setState({
      ipfScore: stringScore,
    })
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <Paper
        className={classNames(classes.control, classes.sideMargin, classes.width)}>
          <Typography align="center" variant="h6" color= "secondary">
            {"Score:"}
          </Typography>
          <Typography align="center" variant="h3" color= "primary">
            {this.state.ipfScore}
          </Typography>
        </Paper>

        <WeightEntry
        handleChange={this.handleChange}
        bodyWeight={this.state.bodyWeight}
        total={this.state.total} />

        <RadioButtonField
        handleChange={this.handleChange}
        gender={this.state.gender}
        event={this.state.eventType}
        lift={this.state.liftType}
        units={this.state.units} />

        <Button variant="contained"
        size="large"
        color="primary"
        className={classNames(classes.button, classes.sideMargin, classes.width)}
        onClick={this.calculateScore} >
          Calculate
        </Button>

        <Button variant="outlined"
        size="large"
        color="secondary"
        className={classNames(classes.logo, classes.sideMargin)}
        fullWidth
        onClick={() => {window.open('https://github.com/amanzanero/IPF-score-calculator')}} >
          <Icon className={classNames(classes.icon, 'fab fa-github')} color="primary" />
        </Button>

        <Typography
        align="center"
        className={classNames(classes.width, classes.sideMargin)}>
          Not afiliated with the IPF.
        </Typography>
      </div>
    )
  }
}

HomePage.propTypes = {
  handleChange: PropTypes.func,
  calculateScore: PropTypes.func,
};

export default withStyles(styles)(HomePage);
