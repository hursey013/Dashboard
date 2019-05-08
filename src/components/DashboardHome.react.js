//  React
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  dashgroup: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class DashboardHome extends Component {  

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className={classes.dashgroup}>Time / Weather</div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.dashgroup}>Date / Calendar</div>
          </Grid>          
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardHome);