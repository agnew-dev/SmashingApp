import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
});

class Controller extends Component {
    render() {
        
        return (
            <div>
                <h1>Hello Controller!</h1>
            </div>
        );
    }
}

Controller.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Controller);