/*
Weight entry component

*** To do
    add break points to the fields
*/
import React from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    paddingTop: '0.5em',
    flexWrap: 'wrap',
    marginRight: '1.5em',
    marginLeft: '1.5em',
  },
  inputField: {
    display: 'flex',
    width: '100%'
  },
});

  

function WeightEntry (props) {
    /*
    * constants will be dictated by the radio button component
    */

    const { classes, handleChange } = props;

    return (
        <div className={classes.root}>

            <div className={classes.inputField}>
                <TextField
                id="outlined-dense"
                label="Body Weight"
                name="bodyWeight"
                type="tel"
                pattern="[0-9]*"
                value={props.bodyWeight}
                onChange={handleChange}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>

            <div className={classes.inputField}>
                <TextField
                id="outlined-dense"
                label="Total"
                name="total"
                type="tel"
                pattern="[0-9]*"
                value={props.total}
                onChange={handleChange}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>

        </div>
    );
}

export default withStyles(styles)(WeightEntry);
