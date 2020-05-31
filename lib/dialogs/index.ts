import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";
import { initHelpDialog } from "./help";
import { initWelcomeDialog } from "./welcome";

export const addDialogs = (dialogs: DialogSet): void => {
  initHelpDialog(dialogs);
  initWelcomeDialog(dialogs);
  dialogs.add(new ChoicePrompt("choicePrompt"));
};
