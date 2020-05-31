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
const botbuilder_ai_1 = require("botbuilder-ai");
const index_1 = require("./dialogs/index");
class EchoBot {
    constructor(qnaMaker, luis, dialogs, conversationState) {
        this._qnaMaker = qnaMaker;
        this._luis = luis;
        this._dialogs = dialogs;
        this._conversationState = conversationState;
        index_1.addDialogs(this._dialogs);
    }
    onTurn(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const dc = yield this._dialogs.createContext(context);
            yield dc.continueDialog();
            if (context.activity.text === "help") {
                yield dc.beginDialog("welcome");
            }
            if (context.activity.type === "message") {
                yield this._luis.recognize(context).then((res) => {
                    const top = botbuilder_ai_1.LuisRecognizer.topIntent(res);
                });
            }
            else {
                yield context.sendActivity(`${context.activity.type} event detected`);
                console.log("Hi");
            }
            yield this._conversationState.saveChanges(context);
        });
    }
}
exports.EchoBot = EchoBot;
//# sourceMappingURL=bot.js.map