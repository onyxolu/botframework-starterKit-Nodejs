import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";

export const initHelpDialog = (dialogs: DialogSet) => {
  dialogs.add(
    new WaterfallDialog("help", [
      async (step: WaterfallStepContext) => {
        const choices = ["djdghjgj", "djdghjfhjgfhjf", "dhjfhgdjgfgfh"];
        const options: PromptOptions = {
          prompt: "what will you like to know?",
          choices: choices,
        };
        return await step.prompt("choicePrompt", options);
      },
      async (step: WaterfallStepContext) => {
        switch (step.result.index) {
          case 0:
            await step.context.sendActivity("first option");
            break;
          case 1:
            await step.context.sendActivity("second option");
            break;
          case 2:
            await step.context.sendActivity("third option");
            break;
          default:
            break;
        }
        return await step.endDialog();
      },
    ])
  );
};
