//  React
import React, { Component } from 'react';

import ReactFitText from 'react-fittext';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  dashgroup: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

class DashboardHome extends Component {  

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
                    
          <Grid item xs={6}>
            <div className={classes.dashgroup}>

              <div>
                <ReactFitText compressor={0.5}><div>
                  80&deg;
                </div></ReactFitText>                                
              </div>
              
              <div>
                Current weather
              </div>

              <div>
                Weekly weather
              </div>

            </div>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.dashgroup}>

              <div>
                <ReactFitText compressor={0.5}><div>
                  10:54am
                </div></ReactFitText>
              </div>

              <div>
                Calendar
              </div>
              
            </div>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardHome);