"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_dialogs_1 = require("botbuilder-dialogs");
exports.initHelpDialog = (dialogs) => {
    dialogs.add(new botbuilder_dialogs_1.WaterfallDialog("help", [
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            const choices = ["djdghjgj", "djdghjfhjgfhjf", "dhjfhgdjgfgfh"];
            const options = {
                prompt: "what will you like to know?",
                choices: choices,
            };
            return yield step.prompt("choicePrompt", options);
        }),
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            switch (step.result.index) {
                case 0:
                    yield step.context.sendActivity("first option");
                    break;
                case 1:
                    yield step.context.sendActivity("second option");
                    break;
                case 2:
                    yield step.context.sendActivity("third option");
                    break;
                default:
                    break;
            }
            return yield step.endDialog();
        }),
    ]));
};
//# sourceMappingURL=help.js.map