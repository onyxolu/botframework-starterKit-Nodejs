import {
  WaterfallDialog,
  WaterfallStepContext,
  DialogSet,
} from "botbuilder-dialogs";

export const initWelcomeDialog = (dialogs: DialogSet) => {
  dialogs.createContext;
  dialogs.add(
    new WaterfallDialog("welcome", [
      async (step: WaterfallStepContext) => {
        step.context.sendActivity(`Hello World`);
        return await step.endDialog();
      },
      async (step: WaterfallStepContext) => {
        return await step.endDialog();
      },
    ])
  );
};
