import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";
import { createCarousel } from "../../cards/allCards/CarouselCard/CarouselCards";
import {
  carouselCardsExample,
  animationCardExample,
  audioCardExample,
  signinCardExample,
  receiptCardExample,
  thumbnailCardExample,
} from "../../cards/utils";
import { createAnimationCard } from "../../cards/allCards/AnimationCard/AnimationCard";
import { createAudioCard } from "../../cards/allCards/AudioCard/AudioCard";
import { createSignInCard } from "../../cards/allCards/SigninCard/SigninCard";
import { createReceiptCard } from "../../cards/allCards/ReceiptCard/ReceiptCard";
import { createThumbnailCard } from "../../cards/allCards/ThumbnailCard/ThumbnailCard";

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
