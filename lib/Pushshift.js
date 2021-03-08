const { Http } = require("./Http");

function compare(a, b) {
    if (a.getDateRaw() < b.getDateRaw()) {
      return -1;
    }

    if (a.getDateRaw() > b.getDateRaw()) {
      return 1;
    }

    return 0;
}

exports.Pushshift = class {
    http;

    constructor() {
        this.http = new Http("https://api.pushshift.io");
    }

    async getData(endpoint, since) {
        let params = {
            author: user.username
        };

        if (since) {
            params.before_id = since;
        }

        return this.http.get(`/reddit/${endpoint}/search`, params);
    }

    async getUserComments(user) {
        let comments = [];

        let res;
        do {
            if (res) {
                res = await this.getData("comment", res[res.length-1].id);
            } else {
                res = await this.getData("comment");
            }
            res.forEach(post => {
                comments.push(new Comment(user, post));
            });
        } while (res.data.length == 100)

        return comments;
    }

    async getUserSubmissions(user) {
        let submissions = [];

        let res;
        do {
            if (res) {
                res = await this.getData("submission", res[res.length-1].id);
            } else {
                res = await this.getData("submission");
            }
            res.forEach(post => {
                submissions.push(new Submission(user, post));
            });
        } while (res.data.length == 100)

        return submissions;
    }

    async getPosts(user) {
        let posts = [];

        posts.push(... await this.getUserComments(user));
        posts.push(... await this.getUserSubmissions(user));

        posts.sort(compare);

        return posts;
    }
}