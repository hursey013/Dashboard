import NewsActions from './../actions/NewsActions';

class NewsAPIUtils {

    checkForTwitterNews(user) {

        //  The base url for the service - change this to your service location:
        //  You can get this lambda method for free at https://github.com/danesparza/breakingnews
        let url = "https://api.daydash.net/v1/news";

        fetch(url, {mode: 'cors'})
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Receive data
                response.json().then(function (data) {
                    //	Call the action to receive the data:
                    NewsActions.recieveNewsData(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    }

}

export default new NewsAPIUtils();