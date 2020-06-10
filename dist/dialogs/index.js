"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_dialogs_1 = require("botbuilder-dialogs");
const card_1 = require("./templates/card");
const prompt_1 = require("./templates/prompt");
const welcome_1 = require("./templates/welcome");
exports.addDialogs = (dialogs) => {
    welcome_1.initWelcomeDialog(dialogs);
    card_1.initCardsDialog(dialogs);
    prompt_1.initPromptDialog(dialogs);
    dialogs.add(new botbuilder_dialogs_1.ChoicePrompt("choicePrompt"));
};
//# sourceMappingURL=index.js.map