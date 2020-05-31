"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const AudioCard = (data) => {
    const { title, buttons, subtitle, text, image, url } = data;
    return botbuilder_1.CardFactory.audioCard(title, url, botbuilder_1.CardFactory.actions(buttons), {
        image: image,
        subtitle: subtitle,
        text: text,
    });
};
exports.createAudioCard = (step, data) => {
    step.context.sendActivity({ attachments: [AudioCard(data)] });
};
//# sourceMappingURL=AudioCard.js.map