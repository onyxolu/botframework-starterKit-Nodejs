"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const ReceiptCard = (data) => {
    const { buttons, facts, items, tap, tax, title, total, vat } = data;
    return botbuilder_1.CardFactory.receiptCard({
        buttons: botbuilder_1.CardFactory.actions(buttons),
        facts: facts,
        items: items,
        tap: tap,
        tax: tax,
        title: title,
        total: total,
        vat: vat,
    });
};
exports.createReceiptCard = (step, data) => {
    step.context.sendActivity({ attachments: [ReceiptCard(data)] });
};
//# sourceMappingURL=ReceiptCard.js.map