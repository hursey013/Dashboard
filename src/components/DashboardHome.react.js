//  React
import React, { Component } from 'react';

import iCalUtils from './../utils/iCalUtils';

class DashboardHome extends Component {  

  render() {

    let events = iCalUtils.GetEventsForToday();
    console.log(events);

    return (
        <div>
            The home 
        </div>
    );
  }
}

export default DashboardHome;