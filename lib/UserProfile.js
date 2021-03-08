exports.UserProfile = class {
    user;
    data;

    constructor(user) {
        this.user = user;
        this.data = new UserData(user);
    }

    async load() {
        await this.data.fetch();
        this.processData();
    }

    processData() {
    }

    isBot() {
    }

    isNewAccount() {
    }

    isTroll() {
    }

    getNegativityIndex() {
    }

    getPositivityIndex() {
    }

    getSentimentIndex() {
    }

    getMostActiveSubs() {
    }

    getMostNegativeSubs() {
    }

    getMostPositiveSubs() {
    }

    getMostActiveEmotion() {
    }

    isPersonalityTemplateApplicable(template) {
    }
}