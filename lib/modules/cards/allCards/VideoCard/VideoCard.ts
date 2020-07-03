import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IVideoCard } from "../types";

const VideoCard = (data: IVideoCard) => {
  const { title, buttons, subtitle, text, url } = data;
  return CardFactory.videoCard(
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

export const createVideoCard = (
  step: WaterfallStepContext,
  data: IVideoCard
) => {
  step.context.sendActivity({ attachments: [VideoCard(data)] });
};
