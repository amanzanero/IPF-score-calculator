/*
Home page 
*/
import React from 'react';
import PropTypes from 'prop-types';
import math from 'mathjs';
import { withStyles } from '@material-ui/styles';

import RadioButtonField from './radiobuttonfield';
import { CONSTANTS } from '../../constants/constants';

const styles = (theme) => ({
  control: {
    padding: '1em',
    marginRight: '2.5em',
    marginLeft: '2.5em',
  },
  root: {
    display: 'flex',
    margin: '0 auto',
    paddingTop: '1em'
  },
  formControl: {

  },
  group: {
    margin: 'auto',
  },
});

class HomePage extends React.Component {
  /*
  constants will be dictated by the radio button component
  */

  state = { 
    gender: 'men',
    constantSet: CONSTANTS.men.raw.threeLift,
    eventType: 'raw',
    liftType: 'threeLift',
    bodyWeight: 64,
    total: 0,
    units: 'kilos',
    ipfScore: 0
  }

  componentDidMount(){
    console.log(this.state)
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.setState({
      constantSet: CONSTANTS[this.state.gender][this.state.eventType][this.state.liftType],
    });
    console.log(name, value);
    console.log(this.state.constantSet)
    // console.log(this.state)
  };

  calculateScore = (total, bodyWeight, constants) => {
    var weight = bodyWeight;
    if (this.state.units === 'pounds') {
      weight = this.state.bodyWeight * 0.453592;
    };
    return ( 500 + 100 *( total - ( constants[0] * math.LN(weight) - constants[1] ))
    / ( constants[2] * math.LN(weight) - constants[3] ));
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <RadioButtonField
        handleChange={this.handleChange}
        gender={this.state.gender}
        event={this.state.eventType}
        lift={this.state.liftType}
        units={this.state.units} />
      </div>
    )
  }
}

HomePage.propTypes = {
  handleChange: PropTypes.func,
  calculateScore: PropTypes.func,
};

export default withStyles(styles)(HomePage);
