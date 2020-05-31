"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
exports.createHeroCard = (step, data) => {
    step.context.sendActivity({ attachments: [exports.HeroCard(data)] });
};
exports.HeroCard = (data) => {
    const { images, buttons, title, subtitle, text } = data;
    return botbuilder_1.CardFactory.heroCard(title, botbuilder_1.CardFactory.images(images), botbuilder_1.CardFactory.actions(buttons), {
        subtitle: subtitle,
        text: text,
    });
};
//# sourceMappingURL=HeroCard.js.map