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
const CarouselCards_1 = require("../cards/CarouselCards");
const utils_1 = require("../cards/utils");
exports.initWelcomeDialog = (dialogs) => {
    dialogs.createContext;
    dialogs.add(new botbuilder_dialogs_1.WaterfallDialog("welcome", [
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            CarouselCards_1.createCarousel(step, utils_1.carouselCardsExample);
            return yield step.endDialog();
        }),
        (step) => __awaiter(void 0, void 0, void 0, function* () {
            {
                console.log(step.result);
            }
            return yield step.endDialog();
        }),
    ]));
};
//# sourceMappingURL=welcome.js.map