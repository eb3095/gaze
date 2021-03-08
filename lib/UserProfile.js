exports.UserProfile = class {
    user;
    data;
    cache = {};

    constructor(user) {
        this.user = user;
        this.data = new UserData(user);
    }

    async load() {
        await this.data.fetch();
        this.processData();
    }

    cache(endpoint, result) {
    }

    processData() {
    }

    isBot() {
    }

    isNewAccount() {
    }

    isTroll() {
    }

    getOverallSentiment() {
    }

    getMostActiveSubs() {
    }

    getMostNegativeInSubreddits() {
    }

    getMostPositiveInSubreddits() {
    }

    getMostActiveEmotions() {
    }

    getSentimentInSubreddit(subreddit) {
    }

    postsInSubreddit() {
    }

    isPersonalityTemplateApplicable(template) {
    }
}