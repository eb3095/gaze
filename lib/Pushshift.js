const { Http } = require("./Http");

exports.Pushshift = class {
    http;

    constructor() {
        this.http = new Http("https://api.pushshift.io");
    }

    async getUserComments(user) {
        let comments = [];
        let result = this.http.get("/reddit/comment/search", {
            author: user.username
        });

        result.forEach(post => {
            comments.push(new Comment(user, post));
        });

        return comments;
    }

    async getUserSubmissions(user) {
        let submissions = [];
        let result = this.http.get("/reddit/submission/search", {
            author: user.username
        });

        result.forEach(post => {
            submissions.push(new Submission(user, post));
        });

        return submissions;
    }
}