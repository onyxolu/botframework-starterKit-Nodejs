"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const AnimationCard = (data) => {
    const { title, subtitle, image } = data;
    return botbuilder_1.CardFactory.animationCard(title, image, [], {
        subtitle: subtitle,
    });
};
exports.createAnimationCard = (step, data) => {
    step.context.sendActivity({ attachments: [AnimationCard(data)] });
};
//# sourceMappingURL=AnimationCard.js.map