import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import CreateNewOverlayButton from './CreateNewOverlay/CreateNewOverlayButton.js';

const styles = theme => ({
    root: {
      //flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      //textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
  });

class Designer extends Component {
    createNewFile(){
        //let store = new OverlayStore({"overlayName" : "SampleOverlay"});
        //store.set({"overlayName" : "SampleOverlay"});
    }
    render() {
        const {classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <Grid 
                    container 
                    spacing={24}
                    justify='space-between'
                >
                    <Grid item xs={12}>
                        <CreateNewOverlayButton />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Designer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Designer);