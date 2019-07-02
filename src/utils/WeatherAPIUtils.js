import Rainbow from 'rainbowvis.js';
import * as Sentry from '@sentry/browser';

//  Actions
import WeatherActions from '../actions/WeatherActions';

class WeatherAPIUtils {

    /* Get the current weather for the given coordiates */
    getWeatherForecast(latitude, longitude) {

        //  The base url for the service - change this to your service location:
        let url = "https://api.daydash.net/v1/weather";

        let apiHeaders = new Headers({
            "Content-Type": "application/json; charset=UTF-8",
        });

        let params = {};
        params.lat = latitude;
        params.long = longitude;

        fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: apiHeaders,
                body: JSON.stringify(params)
            })
            .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Receive data
                response.json().then(function (data) {
                    //	Call the action to receive the data:
                    WeatherActions.recieveWeatherData(data);
                });
            }
            )
            .catch(function (err) {
                Sentry.captureException(err);
                console.log('Fetch Error :-S', err);
            });

    }

    
    /* Get pollen counts for the given zipcode */
    getPollen(zipcode) {
        //  The base url for the service - change this to your service location:
        let url = "https://qb9uu1nz2b.execute-api.us-east-1.amazonaws.com/v1/pollen";

        let apiHeaders = new Headers({
            "Content-Type": "application/json; charset=UTF-8",
        });

        let params = {};
        params.zipcode = zipcode;

        fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: apiHeaders,
                body: JSON.stringify(params)
            })
            .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Receive data
                response.json().then(function (data) {
                    //  Call the action to receive the data:
                    WeatherActions.recievePollenData(data, zipcode);
                });
            }
            )
            .catch(function (err) {
                Sentry.captureException(err);
                console.log('Fetch Error :-S', err);
            });
    }

    /* Get the color for the given temperature */
    getTempColor(temperature) {

        //  Create a new spectrum:
        let rainbow = new Rainbow();

        //  Set our spectrum colors:
        rainbow.setSpectrum("FFC0E4", "D0338D", "33D0C4", "337DD0", "33D035", "DAD82D", "F08E00", "D03333");

        //  Get the color for the given temperature:
        let appColor = "#" + rainbow.colorAt(temperature);

        return appColor;
    }

    // Gets the wind direction icon to use for a given wind directional heading
    getWindDirectionIcon(direction) {

        let retval = `wi wi-wind from-${direction}-deg`;

        return retval;

    }

}

export default new WeatherAPIUtils();