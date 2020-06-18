import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IAnimationCard } from "../../types";

const AnimationCard = (data: IAnimationCard) => {
  const { title, subtitle, image } = data;
  return CardFactory.animationCard(title, image, [], {
    subtitle: subtitle,
  });
};

export const createAnimationCard = (
  step: WaterfallStepContext,
  data: IAnimationCard
) => {
  step.context.sendActivity({ attachments: [AnimationCard(data)] });
};
