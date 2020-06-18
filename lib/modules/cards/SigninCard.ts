import { MessageFactory, Activity, CardFactory, Attachment } from "botbuilder";
import { WaterfallStepContext } from "botbuilder-dialogs";
import { ISigninCard } from "../types";

const SignInCard = (data: ISigninCard) => {
  const { title, url, text } = data;
  return CardFactory.signinCard(title, url, text);
};

export const createSignInCard = (
  step: WaterfallStepContext,
  data: ISigninCard
) => {
  step.context.sendActivity({ attachments: [SignInCard(data)] });
};
