/*
Weight entry component
*/
import React from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    paddingTop: '1em',
    width: '100%',
    flexWrap: 'wrap'
  },
  inputField: {
    display: 'flex',
    width: '100vw'
  },
  textField: {
    marginRight: '2.5em',
    marginLeft: '2.5em',
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
                className={classes.textField}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>

            <div className={classes.inputField}>
                <TextField
                id="outlined-dense"
                label="Squat"
                className={classes.textField}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>

            <div className={classes.inputField}>
                <TextField
                id="outlined-dense"
                label="Bench"
                className={classes.textField}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>

            <div className={classes.inputField}>
                <TextField
                id="outlined-dense"
                label="Deadlift"
                className={classes.textField}
                fullWidth
                margin="dense"
                variant="outlined" />
            </div>
        </div>
    );
}

export default withStyles(styles)(WeightEntry);
