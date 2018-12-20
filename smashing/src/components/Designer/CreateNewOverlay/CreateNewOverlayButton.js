import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, TextField, Select, MenuItem, OutlinedInput, FormControl, InputLabel, Input, Divider } from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './CreateNewOverlayButton.css';
const { OverlayStore } = require('../../../services/OverlayStore/OverlayStore.js');

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});


class CreateNewOverlayButton extends Component {
    state = {
        open: false,
        overlayName: "",
    };


    handleClickOpen = () => {
        this.setState({ open : true });
    };

    handleClose = () => {
        this.setState({ open : false});
    };

    handleSubmit = () => {
        console.log(this.state.overlayName);
        this.state.overlayName = '';
        this.handleClose();
    };

    handleChange = (event) => {
        this.setState({overlayName: event.target.value});
    };

    render() {
        const {classes, theme } = this.props;
        return (
            <div>
                <Button variant='contained' color='primary' onClick={this.handleClickOpen}>
                    New Overlay
                    <CreateNewFolderIcon className={classes.rightIcon} />
                </Button>
                <Dialog fullWidth
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogActions>
                        <nav className='new-overlay-modal-nav'>
                            <ul>
                                <li onClick={this.handleClose}>x</li>
                            </ul>
                        </nav>
                    </DialogActions>
                    <DialogContent>
                        <form>
                            <TextField
                                label='Layout Name'
                                margin='normal'
                                variant='outlined'
                                value={this.state.overlayName}
                                onChange={this.handleChange}
                            />
                            <br />
                            <Button variant='contained' color='primary' onClick={this.handleSubmit} className='new-overlay-submit-btn'>
                                Create
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

CreateNewOverlayButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(CreateNewOverlayButton);