/*
Radio component
*/
import React from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { UNITS, GENDER, EVENTS, LIFTS } from '../../constants/constants'

const styles = (theme) => ({
  control: {
    padding: '1em',
    marginRight: '2.5em',
    marginLeft: '2.5em',
  },
  root: {
    position: 'relative',
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

  

function RadioButtonField (props) {
    /*
    * constants will be dictated by the radio button component
    */

    const { classes, handleChange } = props;

    return (
    <div className={classes.root}>
        <Paper className={classes.control}>
        <Grid container spacing={8}>

            <Grid item xs={6} sm={3}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={props.gender}
                onChange={handleChange}
                >
                {GENDER.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value} 
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Event</FormLabel>
                <RadioGroup
                aria-label="Event"
                name="eventType"
                className={classes.group}
                value={props.event}
                onChange={handleChange}
                >
                {EVENTS.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Lift</FormLabel>
                <RadioGroup
                aria-label="Lift"
                name="liftType"
                className={classes.group}
                value={props.lift}
                onChange={handleChange}
                >
                {LIFTS.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index} 
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

            <Grid item xs={6} sm={3}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Units</FormLabel>
                <RadioGroup
                aria-label="Units"
                name="units"
                value={props.units}
                onChange={handleChange}>
                {UNITS.map((option, index) => (
                    <FormControlLabel
                    key={'mykey' + index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    />
                ))}
                </RadioGroup>
            </FormControl>
            </Grid>

        </Grid>
        </Paper>    
    </div>
    );
}

export default withStyles(styles)(RadioButtonField);
