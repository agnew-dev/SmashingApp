import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Designer from '../Designer/Designer.js';
import Controller from '../Controller/Controller.js';
import { Grid, Tooltip } from '@material-ui/core';
import './Overlay.css';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 7 + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
    
  });

function MainView(props) {
    if(props.mode === 'designer') {
        return (
            <Designer />
        );
    }
    if(props.mode === 'controller') {
        return (
            <Controller />
        );
    }
}


class Overlay extends Component {
    state = {
        open: false,
        mode: 'designer'
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleSelectDesigner = () => {
        this.setState({mode : 'designer'});
    };

    handleSelectController = () => {
        this.setState({mode: 'controller'});
    }

    
    render () {
        const {classes, theme } = this.props;
        const { open } = this.state;
        return(
            <div className={classNames(classes.root, 'overlay-move-down')}>
                <CssBaseline />
                <AppBar position='fixed' className={classNames(classes.appBar, {
                    [classes.appBarShift]: this.state.open,
                })}
                >
                    <Toolbar disableGutters={!this.state.open} variant="dense">
                        <IconButton 
                            color='inherit'
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide] : this.state.open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant='permanent'
                    className={classNames(classes.drawer, 'overlay-drawer', {
                        [classes.drawerOpen] : this.state.open,
                        [classes.drawerClose] : !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen] : this.state.open,
                            [classes.drawerClose] : !this.state.open
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classNames(classes.toolbar, 'overlay-toolbar')}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Designer', 'Live Controller', 'Preview'].map((text, index) => (
                            <ListItem button key={text}>
                                <Tooltip title={text} placement='right'>
                                    <ListItemIcon>{this.menuItem(index)}</ListItemIcon>
                                </Tooltip>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar variant="dense" /> 
                    <MainView mode={this.state.mode} />
                </main>
            </div>
        );
    }

    

    //Handle the menu item icons
    menuItem(index) {
        if(index === 0)
            return (
                <EditIcon onClick={this.handleSelectDesigner} />
            );
        if(index === 1)
            return (
                <AssignmentIcon onClick={this.handleSelectController} />
            );
        if(index === 2)
            return (
                <VisibilityIcon />   
            );
    }
}

Overlay.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Overlay);