import 'whatwg-fetch';
const domain = window.location.host.split(':')[0];
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

class HttpService {
    getCardsData = (user) => {
        return new Promise((resolve, reject) => {
            fetch('http://' + domain + ':' + REACT_APP_SERVER_PORT + '/cards?user=' + user)
                .then(response => {
                    resolve(response.json());
                })
        });
    };
    eventCount = (event, title) => {
        return new Promise((resolve, reject) => {
            fetch('http://' + domain + ':' + REACT_APP_SERVER_PORT + '/product?event=' + event + '&title=' + title)
                .then(response => {
                    resolve('OK');
                })
                .catch(e => {
                    resolve('OK');
                })
        });
    }
}

export default HttpService;