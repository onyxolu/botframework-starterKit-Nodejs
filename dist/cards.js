"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
exports.createHeroCard = (step, data) => {
    step.context.sendActivity({ attachments: [HeroCard(data)] });
};
exports.getChoices = () => {
    const cardOptions = [
        {
            synonyms: ["adaptive"],
            value: "Adaptive Card",
        },
        {
            synonyms: ["animation"],
            value: "Animation Card",
        },
        {
            synonyms: ["audio"],
            value: "Audio Card",
        },
        {
            synonyms: ["hero"],
            value: "Hero Card",
        },
        {
            synonyms: ["receipt"],
            value: "Receipt Card",
        },
        {
            synonyms: ["signin"],
            value: "Signin Card",
        },
        {
            synonyms: ["thumbnail", "thumb"],
            value: "Thumbnail Card",
        },
        {
            synonyms: ["video"],
            value: "Video Card",
        },
        {
            synonyms: ["all"],
            value: "All Cards",
        },
    ];
    return cardOptions;
};
const HeroCard = (data) => {
    const { imageUrl, type, title, subtitle, value, text } = data;
    console.log(data, type);
    return botbuilder_1.CardFactory.heroCard("", botbuilder_1.CardFactory.images([imageUrl]), botbuilder_1.CardFactory.actions([
        {
            type: type,
            title: title,
            value: value,
        },
    ]), {
        subtitle: "jhhdhglu;diohfigyudtfi[po[poihiugsyufifpos",
        text: "fhghjgfidudkjs",
    });
};
exports.CarouselCards = (data) => {
    const heroCards = [];
    data.map((card) => {
        heroCards.push(HeroCard(card));
    });
    return botbuilder_1.MessageFactory.carousel(heroCards);
};
const createAnimationCard = () => {
    return botbuilder_1.CardFactory.animationCard("Microsoft Bot Framework", [{ url: "https://i.giphy.com/Ki55RUbOV5njy.gif" }], [], {
        subtitle: "Animation Card",
    });
};
const createAudioCard = () => {
    return botbuilder_1.CardFactory.audioCard("I am your father", [
        "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_yourfather.wav",
    ], botbuilder_1.CardFactory.actions([
        {
            title: "Read more",
            type: "openUrl",
            value: "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back",
        },
    ]), {
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
            alt: "",
        },
        subtitle: "Star Wars: Episode V - The Empire Strikes Back",
        text: "The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film's story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
    });
};
const createReceiptCard = () => {
    return botbuilder_1.CardFactory.receiptCard({
        buttons: botbuilder_1.CardFactory.actions([
            {
                title: "More information",
                type: "openUrl",
                value: "https://azure.microsoft.com/en-us/pricing/details/bot-service/",
            },
        ]),
        facts: [
            {
                key: "Order Number",
                value: "1234",
            },
            {
                key: "Payment Method",
                value: "VISA 5555-****",
            },
        ],
        items: [
            {
                image: {
                    url: "https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png",
                },
                price: "$38.45",
                quantity: "368",
                subtitle: "",
                tap: { text: "", title: "", type: "", value: "" },
                text: "",
                title: "Data Transfer",
            },
            {
                image: {
                    url: "https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png",
                },
                price: "$45.00",
                quantity: "720",
                subtitle: "",
                tap: { text: "", title: "", type: "", value: "" },
                text: "",
                title: "App Service",
            },
        ],
        tap: { text: "", title: "", type: "", value: "" },
        tax: "$7.50",
        title: "John Doe",
        total: "$90.95",
        vat: "$0.02",
    });
};
const createSignInCard = () => {
    return botbuilder_1.CardFactory.signinCard("BotFramework Sign in Card", "https://login.microsoftonline.com", "Sign in");
};
const createThumbnailCard = () => {
    return botbuilder_1.CardFactory.thumbnailCard("BotFramework Thumbnail Card", [
        {
            url: "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        },
    ], [
        {
            title: "Get started",
            type: "openUrl",
            value: "https://docs.microsoft.com/en-us/azure/bot-service/",
        },
    ], {
        subtitle: "Your bots — wherever your users are talking.",
        text: "Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.",
    });
};
const createVideoCard = () => {
    return botbuilder_1.CardFactory.videoCard("2018 Imagine Cup World Championship Intro", [
        {
            url: "https://sec.ch9.ms/ch9/783d/d57287a5-185f-4df9-aa08-fcab699a783d/IC18WorldChampionshipIntro2.mp4",
        },
    ], [
        {
            title: "Lean More",
            type: "openUrl",
            value: "https://channel9.msdn.com/Events/Imagine-Cup/World-Finals-2018/2018-Imagine-Cup-World-Championship-Intro",
        },
    ], {
        subtitle: "by Microsoft",
        text: "Microsoft's Imagine Cup has empowered student developers around the world to create and innovate on the world stage for the past 16 years. These innovations will shape how we live, work and play.",
    });
};
//# sourceMappingURL=cards.js.map