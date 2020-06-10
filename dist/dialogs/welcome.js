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
exports.initWelcomeDialog = (dialogs) => {
    dialogs.createContext;
    dialogs.add(new botbuilder_dialogs_1.WaterfallDialog("welcome", [
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            const choices = ["Quick Order", "Enquiry", "Feedback on bot", "Quit"];
            const options = {
                prompt: "Welcome to Abigail King Cakes, Select an Option:",
                choices: choices,
            };
            return yield step.prompt("choicePrompt", options);
        }),
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(step);
            switch (step.result.index) {
                case 0:
                    yield step.beginDialog("quickOrder");
                    break;
                case 1:
                    yield step.beginDialog("enquiry");
                    break;
                case 2:
                    yield step.beginDialog("feedback");
                    break;
                case 3:
                    yield step.endDialog();
                    break;
                default:
                    break;
            }
            return yield step.endDialog();
        }),
    ]));
};
//# sourceMappingURL=welcome.js.map