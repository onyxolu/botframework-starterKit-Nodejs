# Bot Framework Starter Kit for NodeJs with easy Integration with LUIS and QNA Maker (Typescript) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

A starter template for a Bot Framework v4.9 Nodejs bot with the up-to-date patterns and practices, Integration with LUIS and QNA Maker .

This sample is complimentary to the [Bot Framework Samples](https://github.com/microsoft/BotBuilder-Samples/tree/master/samples/typescript_nodejs). Many of the patterns used in this sample are taken from common patterns seen in these official samples.

This sample includes the following:

- Bot project with v4.9.1 `Microsoft.Bot.Builder.*` Node packages (Latest as at the point of development)
- Typechecking with Typescript for a better developemnt experience
- Easy integration with [LUIS](https://www.luis.ai/)
- Easy integration with [QNA Maker](https://www.qnamaker.ai/)
- Basic dialog system with a root dialog and multiple child dialogs
- Create Cards by just calling a function and passing a type checked data
- Seamless integration of 8 sample cards and more coming soon
- Easy setup of environment variables

## Libraries

- [botbuilder V4.9.1](https://www.npmjs.com/package/botbuilder/v/4.9.1) (includes botbuilder-ai, botbuilder-dialogs, botbuilder-azure)
- [restify](https://www.npmjs.com/package/restify)
- [Typescript](https://www.npmjs.com/package/typescript)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

How to quickly get started with this project.

### Install Visual Studio code

Download [here](https://code.visualstudio.com/)

### Install Bot Framework emulator

Download [here](https://github.com/Microsoft/BotFramework-Emulator/releases/tag/v4.9.0)

### Clone and rename

You can clone this repository and adapt to suit your needs.

This approach is appropriate if you want the very latest version of the template or simply want to explore the code without creating a new project.

Follow these steps:

1. Clone this repository
2. Update (name and author) in package.json
3. install dependencies

```terminal
npm install
```

4. Run the Typescript Build

```command
(Ctrl+Shift+B)
```

5. Start the Node development server

```terminal
node server
```

6. Connect to bot framework emulator

## Credits

This was a collaborative effort between these main contributors:

- [Olumide Ogundare, Microsoft Student Partner](https://github.com/onyxolu)
