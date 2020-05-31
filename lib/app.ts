import {
  BotFrameworkAdapter,
  ConversationState,
  MemoryStorage,
} from "botbuilder";
import { QnAMaker, LuisRecognizer } from "botbuilder-ai";

import * as restify from "restify";
import { EchoBot } from "./bot";
import { config } from "dotenv";
import { DialogSet, DialogState } from "botbuilder-dialogs";

config();

const conversationState = new ConversationState(new MemoryStorage());
const dialogs = new DialogSet(conversationState.createProperty("dialogState"));

let server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s listening.....", server.url);
});

const adapter = new BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

const qnAMaker = new QnAMaker({
  knowledgeBaseId: process.env.KB_id,
  endpointKey: process.env.KB_KEY,
  host: process.env.KB_HOST,
});

const luis = new LuisRecognizer({
  applicationId: process.env.LUIS_APP_ID,
  endpointKey: process.env.LUIS_KEY,
  endpoint: process.env.LUIS_ENDPOINT,
});

const echo: EchoBot = new EchoBot(qnAMaker, luis, dialogs, conversationState);

server.post("/api/messages", (req, res) => {
  adapter.processActivity(req, res, async (context) => {
    await echo.onTurn(context);
  });
});
