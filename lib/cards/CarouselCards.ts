import { HeroCard } from "./HeroCard";
import { IHeroCard } from "../types";
import { MessageFactory } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";

export const createCarousel = (
  step: WaterfallStepContext,
  data: IHeroCard[]
) => {
  const heroCards = [];
  for (let i = 0; i < data.length; i++) {
    heroCards.push(HeroCard(data[i]));
  }
  return step.context.sendActivity(MessageFactory.carousel(heroCards));
};
