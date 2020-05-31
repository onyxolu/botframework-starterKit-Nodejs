"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HeroCard_1 = require("./HeroCard");
const botbuilder_1 = require("botbuilder");
exports.createCarousel = (step, data) => {
    const heroCards = [];
    for (let i = 0; i < data.length; i++) {
        heroCards.push(HeroCard_1.HeroCard(data[i]));
    }
    return step.context.sendActivity(botbuilder_1.MessageFactory.carousel(heroCards));
};
//# sourceMappingURL=CarouselCards.js.map