exports.UserProfile = class {
    user;
    data;
    cache = {};
    currentVersion = 0;

    constructor(user) {
        this.user = user;
        this.data = new UserData(user);
    }

    async load() {
        await this.data.fetch();
        this.processData();
    }

    cache(endpoint, params) {
        if (this.cache[endpoint.name] && this.cache[endpoint.name].version >= this.currentVersion) {
            return this.cache[endpoint.name].value;
        }

        this.cache[endpoint.name] = endpoint(params, cache);

        return this.cache[endpoint.name];
    }

    processData() {
    }

    isBot(cache) {
        if (cache) {
            return this.cache(this.isBot);
        }
    }

    isNewAccount(cache) {
        if (cache) {
            return this.cache(this.isNewAccount);
        }
    }

    isTroll(cache) {
        if (cache) {
            return this.cache(this.isTroll);
        }
    }

    getOverallSentiment(cache) {
        if (cache) {
            return this.cache(this.getOverallSentiment);
        }
    }

    getMostActiveSubs(cache) {
        if (cache) {
            return this.cache(this.getMostActiveSubs);
        }
    }

    getMostNegativeInSubreddits(cache) {
        if (cache) {
            return this.cache(this.getMostNegativeInSubreddits);
        }
    }

    getMostPositiveInSubreddits(cache) {
        if (cache) {
            return this.cache(this.getMostPositiveInSubreddits);
        }
    }

    getMostActiveEmotions(cache) {
        if (cache) {
            return this.cache(this.getMostActiveEmotions);
        }
    }

    getSentimentInSubreddit(subreddit, cache) {
        if (cache) {
            return this.cache(this.getSentimentInSubreddit, subreddit);
        }
    }

    postsInSubreddit(cache) {
        if (cache) {
            return this.cache(this.postsInSubreddit);
        }
    }

    isPersonalityTemplateApplicable(template, cache) {
        if (cache) {
            return this.cache(this.isPersonalityTemplateApplicable, template);
        }
    }
}