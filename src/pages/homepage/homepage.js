/*
Home page 
*/
import React from 'react';
import math from 'mathjs';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const UNITS = ['kilos', 'pounds'];
const GENDER = [
  {
    label: 'Man',
    value: 'men',
  },
  {
    label: 'Woman',
    value: 'women'
  },
];
const EVENTS = [
  {
    label:  'Classic 3-Lift',
    value: 'classicThreeLift'
  },
  {
    label: 'Classic Bench',
    value: 'classicBench',
  },
  {
    label: 'Equipped 3-Lift',
    value: 'equippedThreeLift',
  },
  {
    label: 'Equipped Bench',
    value: 'equippedBench',
  },
]
const CONSTANTS = {
  'men': {
    'classicThreeLift': [310.67,	857.785,	53.216,	147.0835],
    'classicBench': [86.4745, 259.155, 17.57845, 53.122],
    'equippedThreeLift': [387.265, 1121.28, 80.6324, 222.4896],
    'equippedBench': [133.94, 441.465, 35.3938, 113.0057],
  },
  'women': {
    'classicThreeLift': [125.1435, 228.03, 34.5246, 86.8301],
    'classicBench': [25.0485, 43.848, 6.7172, 13.952],
    'equippedThreeLift': [176.58, 373.315, 48.4534, 110.0103],
    'equippedBench': [49.106, 124.209, 23.199, 67.4926],
  },
}

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginTop: '10%',
    margin: '0 auto',
  },
  group: {
    margin: 'auto',
  },
});

class HomePage extends React.PureComponent {
  /*
  constants will be dictated by the radio button component
  */
  
  state = { 
    gender: 'men',
    constantSet: CONSTANTS.men.classicThreeLift,
    eventType: 'classicThreeLift',
    bodyWeight: 64,
    total: 0,
    units: UNITS[0],
    ipfScore: 0
  }

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
    this.setState({ 'constantSet': CONSTANTS[this.state.gender][this.state.eventType] })
    console.log(this.state);
  };

  calculateScore = (total, bodyWeight, constants) => {
    return ( 500 + 100 *( total - ( constants[0] * math.LN(bodyWeight) - constants[1] ))
    / ( constants[2] * math.LN(bodyWeight) - constants[3] ));
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.gender}
            onChange={this.handleChange('gender')}
          >
            {GENDER.map((option) => (
              <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Lift</FormLabel>
          <RadioGroup
            aria-label="Lift"
            name="lift1"
            className={classes.group}
            value={this.state.eventType}
            onChange={this.handleChange('eventType')}
          >
            {EVENTS.map((option) => (
              <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        </FormControl>

      </div>
    )
  }
}

export default withStyles(styles)(HomePage);
