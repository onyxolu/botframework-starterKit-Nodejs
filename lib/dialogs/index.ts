import { ChoicePrompt, DialogSet } from "botbuilder-dialogs";
import { initCardsDialog } from "./templates/card";
import { initPromptDialog } from "./templates/prompt";
import { initWelcomeDialog } from "./templates/welcome";

export const addDialogs = (dialogs: DialogSet): void => {
  initWelcomeDialog(dialogs);
  initCardsDialog(dialogs);
  initPromptDialog(dialogs);
  dialogs.add(new ChoicePrompt("choicePrompt"));
};
