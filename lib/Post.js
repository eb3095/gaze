exports.Comment = class {
    user;
    data;

    constructor(user, data) {
        this.user = user;
        this.data = data;
    }

    getKarma() {
    }

    getSentiment() {
    }

    getEmotion() {
    }

    getDate() {
    }

    getSubreddit() {
    }

    getType() {
        return typeof this;
    }

    isComment() {
        return this.getType() == "Comment";
    }

    isComment() {
        return this.getType() == "Submission";
    }
}