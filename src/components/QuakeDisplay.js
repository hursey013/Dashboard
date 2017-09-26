import React, { Component } from 'react';
import Moment from 'moment';

class QuakeDisplay extends Component{

  render() {

    //  First, see if we have an item to display.
    if(this.props.quakes.length < 1) {
        return null;
    }

    //  If we do, get the first one:
    let quakeItem = this.props.quakes[0];

    //  If we have an item, but it's not in the last 12 hours, don't display it:
    let quakeEventTime = Moment(quakeItem.time);
    if(quakeEventTime.isBefore(Moment().subtract(12, 'hours')))
    {
      return null;
    }

    //  Set the time format:
    var formattedTime = quakeEventTime.fromNow();

  	return (
        <div className="media">
            <img className="d-flex align-self-start mr-3" src={quakeItem.mapUrl} alt="Earthquake map"/>
            <div className="media-body">
                <h2 className="mt-0"><b>{quakeItem.mag}</b> magnitude earthquake</h2>
                {formattedTime} {quakeItem.title}
            </div>
        </div>
    );
  }
}

export default QuakeDisplay;