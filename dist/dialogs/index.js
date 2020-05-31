"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_dialogs_1 = require("botbuilder-dialogs");
const help_1 = require("./help");
const welcome_1 = require("./welcome");
exports.addDialogs = (dialogs) => {
    help_1.initHelpDialog(dialogs);
    welcome_1.initWelcomeDialog(dialogs);
    dialogs.add(new botbuilder_dialogs_1.ChoicePrompt("choicePrompt"));
};
//# sourceMappingURL=index.js.map