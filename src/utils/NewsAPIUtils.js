import NewsActions from '../actions/NewsActions';
import * as Sentry from '@sentry/browser';

class NewsAPIUtils {

    getTwitterFeed(user) {

        //  The base url for the service - change this to your service location:
        //  You can get this microservice for free at https://github.com/danesparza/twitter-breaking-news
        var baseurl = "https://xcktpgt8r4.execute-api.us-east-1.amazonaws.com/v1/";

        //  Get the news using the given user's screen name
        var url = baseurl + user;

        fetch(url, {mode: 'cors'})
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Receive data
                response.json().then(function (data) {
                    if(data == null) {
                        Sentry.captureMessage('News data is null and should not be');
                    }
                    
                    //	Call the action to receive the data:
                    NewsActions.recieveNewsData(data);
                });
            }
        )
        .catch(function (err) {
            Sentry.captureException(err);
            console.log('Fetch Error :-S', err);
        });
    }

}

export default new NewsAPIUtils();