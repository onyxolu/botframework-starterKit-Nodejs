"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const ThumbnailCard = (data) => {
    const { title, buttons, subtitle, text, url } = data;
    return botbuilder_1.CardFactory.thumbnailCard(title, [
        {
            url: url,
        },
    ], buttons, {
        subtitle: subtitle,
        text: text,
    });
};
exports.createThumbnailCard = (step, data) => {
    step.context.sendActivity({ attachments: [ThumbnailCard(data)] });
};
//# sourceMappingURL=ThumbnailCard.js.map