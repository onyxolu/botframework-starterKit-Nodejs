import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IThumbnailCard } from "../types";

const ThumbnailCard = (data: IThumbnailCard) => {
  const { title, buttons, subtitle, text, url } = data;
  return CardFactory.thumbnailCard(
    title,
    [
      {
        url: url,
      },
    ],
    buttons,
    {
      subtitle: subtitle,
      text: text,
    }
  );
};

export const createThumbnailCard = (
  step: WaterfallStepContext,
  data: IThumbnailCard
) => {
  step.context.sendActivity({ attachments: [ThumbnailCard(data)] });
};
