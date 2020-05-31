"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const VideoCard = (data) => {
    const { title, buttons, subtitle, text, url } = data;
    return botbuilder_1.CardFactory.videoCard(title, [
        {
            url: url,
        },
    ], buttons, {
        subtitle: subtitle,
        text: text,
    });
};
exports.createVideoCard = (step, data) => {
    step.context.sendActivity({ attachments: [VideoCard(data)] });
};
//# sourceMappingURL=VideoCard.js.map