/*
Home page 
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { Paper, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Grid from '@material-ui/core/Grid';

import RadioButtonField from './radiobuttonfield';
import WeightEntry from './weightentry';
import { CONSTANTS } from '../../constants/constants';
import { WILKS_CONSTANTS } from "../../constants/constants";



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
    maxWidth: '400px',
    marginBottom: '1em'
  },
  group: {
    margin: 'auto',
  },
  button: {
    marginTop: '.75em',
  },
  logo: {
    marginTop: '2.5em',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '.5em',
    width: '75px'
  },
  width: {
    width: '100%',
  },
  sideMargin: {
    marginLeft: '1.5em',
    marginRight: '1.5em',
  },
  ico: {
    transform: 'scale(1.75)',
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
      ipfScore: '0.0',
      wilksScore: '0.0',
    }
  };

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

    /* Check inputs to make sure they are valid */
    if (isNaN(weight) || isNaN(total)) return;

    /* Both calculations need to be done in kg */
    if (this.state.units === 'pounds') {
      weight = this.state.bodyWeight * 0.453592;
      total = this.state.total * 0.453592;
    };

    /**
     * IPf calculation
     */
    var constants = CONSTANTS[this.state.gender][this.state.eventType][this.state.liftType];
    var score = 500 + 100 *( total - ( constants[0] * Math.log(weight) - constants[1] ))
    / ( constants[2] * Math.log(weight) - constants[3] );

    /**
     * Wilks calculation
     * - get constants for coefficient
     * - multiply coefficient by total
     */
    var C = WILKS_CONSTANTS[this.state.gender];
    var a = C['a'];
    var b = C['b'] * weight;
    var c = C['c'] * Math.pow(weight,2);
    var d = C['d'] * Math.pow(weight,3);
    var e = C['e'] * Math.pow(weight,4);
    var f = C['f'] * Math.pow(weight,5);

    var wilksCoeff = 500 / (a+b+c+d+e+f);
    var wScore = wilksCoeff * total;

    /* So we don't output anything that doesnt fit */
    score = Math.round(score*100)/100;
    wScore = Math.round(wScore*100)/100;
    let stringScore;
    let wStringScore
    if (score > 999){
      stringScore = "u sure?";
    }
    else if (isNaN(score) || score < 0){
      stringScore = "0.0";
    } else {
      stringScore = score.toString();
    }

    if (wScore > 999) {
      wStringScore = "u sure?";
    }
    else if (isNaN(wScore) || wScore < 0){
      wStringScore = "0.0";
    } else {
      wStringScore = wScore.toString();
    }

    this.setState({
      ipfScore: stringScore,
      wilksScore: wStringScore
    })
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <Paper
        className={classNames(classes.control, classes.sideMargin, classes.width)}>
         <Grid container spacing={24}>
          <Grid item xs={6}>
            <Typography align="center" variant="h6" color="secondary">
              {"IPF:"}
            </Typography>
            <Typography align="center" variant="h4" color="primary">
              {this.state.ipfScore}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="center" variant="h6" color="secondary">
              {"Wilks:"}
            </Typography>
            <Typography align="center" variant="h4" color="primary">
              {this.state.wilksScore}
            </Typography>
          </Grid>
          </Grid>
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
        onClick={()=>{
          this.calculateScore();
          }} >
          Calculate
        </Button>

        <Button variant="outlined"
        size="large"
        color="secondary"
        className={classes.logo}
        onClick={() => {window.open('https://github.com/amanzanero/IPF-score-calculator')}} >
          <FontAwesomeIcon
          icon={faGithub}
          className={classes.ico}
          />
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
