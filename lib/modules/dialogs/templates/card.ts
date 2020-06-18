import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";
import { createCarousel } from "../../cards/CarouselCards";
import {
  carouselCardsExample,
  animationCardExample,
  audioCardExample,
  signinCardExample,
  receiptCardExample,
  thumbnailCardExample,
} from "../../cards/utils";
import { createAnimationCard } from "../../cards/allCards/AnimationCard";
import { createAudioCard } from "../../cards/AudioCard";
import { createSignInCard } from "../../cards/SigninCard";
import { createReceiptCard } from "../../cards/ReceiptCard";
import { createThumbnailCard } from "../../cards/ThumbnailCard";

export const initCardsDialog = (dialogs: DialogSet) => {
  dialogs.createContext;
  dialogs.add(
    new WaterfallDialog("cards", [
      async (step: WaterfallStepContext) => {
        createCarousel(step, carouselCardsExample);
        createAnimationCard(step, animationCardExample);
        createAudioCard(step, audioCardExample);
        createSignInCard(step, signinCardExample);
        createReceiptCard(step, receiptCardExample);
        createThumbnailCard(step, thumbnailCardExample);
        return await step.endDialog();
      },
      async (step: WaterfallStepContext) => {
        {
          console.log(step.result);
        }
        return await step.endDialog();
      },
    ])
  );
};
