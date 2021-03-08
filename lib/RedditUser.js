const { UserProfile } = require("./UserProfile");

exports.RedditUser = class {
    username;
    profile;

    constructor(username) {
        this.username = username;
        this.profile = new UserProfile(this);
    }

    async load() {
        this.profile.load();
    }

    getUserData() {
        return this.profile.data;
    }

}