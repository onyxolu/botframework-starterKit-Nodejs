import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";
import { createHeroCard } from "../cards/HeroCard";
import { CardFactory, ReceiptCard } from "botbuilder";
import { createReceiptCard } from "../cards/ReceiptCard";
import { createSignInCard } from "../cards/SigninCard";
import { createThumbnailCard } from "../cards/ThumbnailCard";
import { createVideoCard } from "../cards/VideoCard";
import { createAudioCard } from "../cards/AudioCard";
import { createAnimationCard } from "../cards/AnimationCard";
import { createCarousel } from "../cards/CarouselCards";
import {
  receiptCardExample,
  signinCardExample,
  thumbnailCardExample,
  VideoCardExample,
  audioCardExample,
  animationCardExample,
  heroCardExample,
  carouselCardsExample,
} from "../cards/utils";

export const initWelcomeDialog = (dialogs: DialogSet) => {
  dialogs.createContext;
  dialogs.add(
    new WaterfallDialog("welcome", [
      async (step: WaterfallStepContext) => {
        createHeroCard(step, heroCardExample);
        // createReceiptCard(step, receiptCardExample);
        // createSignInCard(step, signinCardExample);
        // createThumbnailCard(step, thumbnailCardExample);
        // createVideoCard(step, VideoCardExample);
        // createAudioCard(step, audioCardExample);
        // createAnimationCard(step, animationCardExample);
        // createCarousel(step, carouselCardsExample);
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
