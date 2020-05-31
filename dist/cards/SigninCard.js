"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const SignInCard = (data) => {
    const { title, url, text } = data;
    return botbuilder_1.CardFactory.signinCard(title, url, text);
};
exports.createSignInCard = (step, data) => {
    step.context.sendActivity({ attachments: [SignInCard(data)] });
};
//# sourceMappingURL=SigninCard.js.map