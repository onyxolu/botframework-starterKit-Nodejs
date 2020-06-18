import { ChoicePrompt, DialogSet } from "botbuilder-dialogs";
import { initCardsDialog } from "../modules/dialogs/templates/card";
import { initPromptDialog } from "../modules/dialogs/templates/prompt";
import { initWelcomeDialog } from "../modules/dialogs/templates/welcome";

export const addDialogs = (dialogs: DialogSet): void => {
  initWelcomeDialog(dialogs);
  initCardsDialog(dialogs);
  initPromptDialog(dialogs);
  dialogs.add(new ChoicePrompt("choicePrompt"));
};
