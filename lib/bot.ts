import { QnAMaker, LuisRecognizer } from "botbuilder-ai";
import { DialogSet } from "botbuilder-dialogs";
import { ConversationState, TurnContext } from "botbuilder";
import { addDialogs } from "./dialogs/index";

export class EchoBot {
  private _qnaMaker: QnAMaker;
  private _luis: LuisRecognizer;
  private _dialogs: DialogSet;
  private _conversationState: ConversationState;
  constructor(
    qnaMaker: QnAMaker,
    luis: LuisRecognizer,
    dialogs: DialogSet,
    conversationState: ConversationState
  ) {
    this._qnaMaker = qnaMaker;
    this._luis = luis;
    this._dialogs = dialogs;
    this._conversationState = conversationState;
    addDialogs(this._dialogs);
  }

  async onTurn(context: TurnContext) {
    const dc = await this._dialogs.createContext(context);
    await dc.continueDialog();

    if (context.activity.type === "message") {
      //qna maker
      // const qnaResults = await this._qnaMaker.generateAnswer(
      //   context.activity.text
      // );
      // if (qnaResults.length > 0) {
      //   // context.sendActivity(qnaResults[0].answer)
      // }
      // luis;
      // await this._luis.recognize(context).then((res) => {
      //   const top = LuisRecognizer.topIntent(res);
      //   context.sendActivity(`The top intent was ${top}`);
      // });
      // await dc.beginDialog("welcome");
    } else {
      await dc.beginDialog("welcome");
    }
    await this._conversationState.saveChanges(context);
  }
}
