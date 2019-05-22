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
    color: theme.palette.text.secondary,
  },
  bodybackground: {
    backgroundColor: theme.palette.background.default,
  }
});

class DashboardHome extends Component {  

  componentDidMount() {
    const { classes } = this.props;

    //  Set the body background color:
    document.body.className = classes.bodybackground;
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
          <Grid container spacing={0}>
                    
            <Grid item xs={6}>
              <div className={classes.dashgroup}>

                <div>
                  <ReactFitText compressor={0.5}><div>
                    Left
                  </div></ReactFitText>                                
                </div>
                
                <div>
                  Current weather
                  
                </div>

                <div>
                  Weekly weather

                  <table>
                    <tbody>
                      <tr className="forcast-datarow">
                        <td className="forecast-icon">Icon</td>
                        <td>
                          Day<br/>
                          <span className="forcast-summary">Summary</span>            
                        </td>
                        <td className="forecast-temp">Low / Hi</td>
                        <td className="forecast-moon">Moon phase</td>
                        <td className="forecast-pollen">Pollen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.dashgroup}>

                <div>
                  <ReactFitText compressor={0.5}><div>
                    Right
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