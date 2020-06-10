import {
  WaterfallDialog,
  WaterfallStepContext,
  PromptOptions,
  ChoicePrompt,
  DialogSet,
} from "botbuilder-dialogs";

export const initPromptDialog = (dialogs: DialogSet) => {
  dialogs.add(
    new WaterfallDialog("prompt", [
      async (step: WaterfallStepContext) => {
        const choices = ["Option 1", "Option 2", "Option 3"];
        const options: PromptOptions = {
          prompt: "what will you like to know?",
          choices: choices,
        };
        return await step.prompt("choicePrompt", options);
      },
      async (step: WaterfallStepContext) => {
        switch (step.result.index) {
          case 0:
            await step.context.sendActivity("First option");
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
