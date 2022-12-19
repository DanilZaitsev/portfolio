import 'whatwg-fetch';
const domain = window.location.host.split(':')[0];
const config = require("../config");

class HttpService {
    getProducts = () => {
        return new Promise((resolve, reject) => {
            fetch('http://' + domain + ':' + config.port + '/product')
                .then(response => {
                    resolve(response.json());
                })
        });
    };
    eventCount = (event, title) => {
        return new Promise((resolve, reject) => {
            fetch('http://' + domain + ':' + config.port + '/product?event=' + event + '&title=' + title)
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