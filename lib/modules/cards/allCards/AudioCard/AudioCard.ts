import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { IAudioCard } from "../../../types";

const AudioCard = (data: IAudioCard) => {
  const { title, buttons, subtitle, text, image, url } = data;
  return CardFactory.audioCard(title, url, CardFactory.actions(buttons), {
    image: image,
    subtitle: subtitle,
    text: text,
  });
};

export const createAudioCard = (
  step: WaterfallStepContext,
  data: IAudioCard
) => {
  step.context.sendActivity({ attachments: [AudioCard(data)] });
};
