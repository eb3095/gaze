const ExtendedError = require(`${__base}/lib/ExtendedError.js`).ExtendedError;

// Request helper function
function request(action, url, data) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open(action, url);

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    code: this.status,
                    status: xhr.statusText
                });
            }
        };

        xhr.onerror = function () {
            reject({
                code: this.status,
                status: xhr.statusText
            });
        };

        xhr.send(data);
    });
}

exports.Http = class {
    url = "";

    // Specify the URL communicated with
    constructor(url) {
        this.url = url;
    }

    // Get data as an object
    get(page, data) {
        return request("get", `${url}${page}`, data);
    }
};