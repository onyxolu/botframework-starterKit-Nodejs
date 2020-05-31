import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IReceiptCard } from "../types";

const ReceiptCard = (data: IReceiptCard) => {
  const { buttons, facts, items, tap, tax, title, total, vat } = data;
  return CardFactory.receiptCard({
    buttons: CardFactory.actions(buttons),
    facts: facts,
    items: items,
    tap: tap,
    tax: tax,
    title: title,
    total: total,
    vat: vat,
  });
};

export const createReceiptCard = (
  step: WaterfallStepContext,
  data: IReceiptCard
) => {
  step.context.sendActivity({ attachments: [ReceiptCard(data)] });
};
