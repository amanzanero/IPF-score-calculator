/*
Nav bar contains title with menu
- need to add login functionality
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';


const styles = {
    root: {
        display: 'flex',
        position: 'relative',
    },
    grow: {
        flexGrow: 1,
        align: 'center',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends React.Component {

    state = {
        anchorEl: undefined,
        open: false,
    };
    
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };
    
    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
    
        this.setState({ open: false });
    };
    
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <AppBar className={classes.root}>
                <Toolbar>
                <IconButton 
                className={classes.menuButton} 
                aria-label="Menu"
                buttonRef={node => {
                    this.anchorEl = node;
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="secondary"
                onClick={this.handleToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
                <Typography
                variant="h5"
                className={classes.grow}
                color="secondary" >
                    Load the Barbell
                </Typography>
                <Button color="secondary">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
