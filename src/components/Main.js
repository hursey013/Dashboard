//  React
import React, { Component } from 'react';

//  Components
import ReactFitText from 'react-fittext';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//  Stores
import NewsStore from './../stores/NewsStore';

//  Utils:
import NewsAPIUtils from './../utils/NewsAPIUtils';

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

class Main extends Component {  

  constructor(){
    super();

      this.state = {
        NewsData: NewsStore.getNews(),
        WeatherData: [],
        PollenData: [],
        CalendarData: [],
        QuakeData: [],
      };
  }

  //  Time passed - refresh data
  tick = () => {
    try
    {
      //  Refresh data
    }
    catch(ex) 
    { 
      //  Log exceptions here
    }
  }

  componentDidMount() {
    const { classes } = this.props;

    //  Set the body background color:
    document.body.className = classes.bodybackground;

    //  Kick off the initial check
    NewsAPIUtils.checkForTwitterNews();

    //  Add an interval tick for every 5 minutes:
    this.interval = setInterval(this.tick, 300000);

    //  Add store listeners ... and notify ME of changes
    this.authListener = NewsStore.addListener(this._onChange);
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

  //  'change' event
  _onChange = (e) => {
    
  }
}

export default withStyles(styles)(Main);