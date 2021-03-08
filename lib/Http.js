const ExtendedError = require(`${__base}/lib/ExtendedError.js`).ExtendedError;

// Request helper function
async function _request(action, url, data, headers = null) {
}

exports.Http = class {
    url = "";

    // Specify the URL communicated with
    constructor(url) {
        this.url = url;
    }

    // Post data as an object
    post(data, page, headers = null) {
    }

    // Get data as an object
    get(data, page, headers = null) {
    }
};