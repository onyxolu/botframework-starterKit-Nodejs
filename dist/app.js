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
const botbuilder_1 = require("botbuilder");
const botbuilder_ai_1 = require("botbuilder-ai");
const restify = require("restify");
const bot_1 = require("./bot");
const dotenv_1 = require("dotenv");
const botbuilder_dialogs_1 = require("botbuilder-dialogs");
dotenv_1.config();
const conversationState = new botbuilder_1.ConversationState(new botbuilder_1.MemoryStorage());
const dialogs = new botbuilder_dialogs_1.DialogSet(conversationState.createProperty("dialogState"));
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("%s listening.....", server.url);
});
const adapter = new botbuilder_1.BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD,
});
const qnAMaker = new botbuilder_ai_1.QnAMaker({
    knowledgeBaseId: process.env.KB_id,
    endpointKey: process.env.KB_KEY,
    host: process.env.KB_HOST,
});
const luis = new botbuilder_ai_1.LuisRecognizer({
    applicationId: process.env.LUIS_APP_ID,
    endpointKey: process.env.LUIS_KEY,
    endpoint: process.env.LUIS_ENDPOINT,
});
const echo = new bot_1.EchoBot(qnAMaker, luis, dialogs, conversationState);
server.post("/api/messages", (req, res) => {
    adapter.processActivity(req, res, (context) => __awaiter(void 0, void 0, void 0, function* () {
        yield echo.onTurn(context);
    }));
});
//# sourceMappingURL=app.js.map