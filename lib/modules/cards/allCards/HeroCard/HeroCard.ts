import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IHeroCard } from "../types";

export const createHeroCard = (step: WaterfallStepContext, data: IHeroCard) => {
  step.context.sendActivity({ attachments: [HeroCard(data)] });
};

export const HeroCard = (data: IHeroCard) => {
  const { images, buttons, title, subtitle, text } = data;
  return CardFactory.heroCard(
    title,
    CardFactory.images(images),
    CardFactory.actions(buttons),
    {
      subtitle: subtitle,
      text: text,
    }
  );
};
