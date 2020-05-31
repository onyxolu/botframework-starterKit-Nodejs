"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiptCardExample = {
    buttons: [
        {
            title: "More information",
            type: "openUrl",
            value: "https://azure.microsoft.com/en-us/pricing/details/bot-service/",
        },
    ],
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
};
exports.VideoCardExample = {
    title: "2018 Imagine Cup World Championship Intro",
    buttons: [
        {
            title: "Lean More",
            type: "openUrl",
            value: "https://channel9.msdn.com/Events/Imagine-Cup/World-Finals-2018/2018-Imagine-Cup-World-Championship-Intro",
        },
    ],
    subtitle: "by Microsoft",
    text: "Microsoft's Imagine Cup has empowered student developers around the world to create and innovate on the world stage for the past 16 years. These innovations will shape how we live, work and play.",
    url: "https://sec.ch9.ms/ch9/783d/d57287a5-185f-4df9-aa08-fcab699a783d/IC18WorldChampionshipIntro2.mp4",
};
exports.signinCardExample = {
    title: "BotFramework Sign in Card",
    text: "Sign in",
    url: "https://login.microsoftonline.com",
};
exports.audioCardExample = {
    title: "I am your father",
    buttons: [
        {
            title: "Read more",
            type: "openUrl",
            value: "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back",
        },
    ],
    subtitle: "Star Wars: Episode V - The Empire Strikes Back",
    text: "The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film's story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.",
    image: {
        url: "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
        alt: "",
    },
    url: [
        "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_yourfather.wav",
    ],
};
exports.animationCardExample = {
    title: "Microsoft Bot Framework",
    subtitle: "Animation Card",
    image: [{ url: "https://i.giphy.com/Ki55RUbOV5njy.gif" }],
};
exports.thumbnailCardExample = {
    title: "BotFramework Thumbnail Card",
    buttons: [
        {
            title: "Get started",
            type: "openUrl",
            value: "https://docs.microsoft.com/en-us/azure/bot-service",
        },
    ],
    subtitle: "Your bots — wherever your users are talking.",
    text: "Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.",
    url: "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
};
exports.heroCardExample = {
    images: [
        "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
    ],
    buttons: [
        {
            title: "Get started",
            type: "openUrl",
            value: "https://docs.microsoft.com/en-us/azure/bot-service/",
        },
    ],
    subtitle: "Subtitle",
    text: "text",
    title: "BotFramework Hero Card",
};
exports.carouselCardsExample = [
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
    {
        images: [
            "https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg",
        ],
        buttons: [
            {
                title: "Get started",
                type: "openUrl",
                value: "https://docs.microsoft.com/en-us/azure/bot-service/",
            },
        ],
        subtitle: "Subtitle",
        text: "text",
        title: "BotFramework Hero Card",
    },
];
//# sourceMappingURL=utils.js.map