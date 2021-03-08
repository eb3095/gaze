exports.ExtendedError = class extends Error {
    constructor(parameters) {
        super(parameters.message);
        this.name = parameters.name;
        this.type = parameters.type;
    }
};