import { ActionTypes } from "botbuilder";

///////////-----   Cards   ----------////////////

export interface IHeroCard {
  buttons: ICardAction[];
  images: string[];
  subtitle: string;
  text: string;
  title: string;
}

export interface ISigninCard {
  title: string;
  text: string;
  url: string;
}

export interface IReceiptCard {
  buttons: ICardAction[];
  facts: IFact[];
  items: IReceiptItem[];
  tap: ICardAction;
  tax: string;
  title: string;
  total: string;
  vat: string;
}

export interface IVideoCard {
  title: string;
  buttons: ICardAction[];
  subtitle: string;
  text: string;
  url: string;
}

export interface IThumbnailCard {
  title: string;
  buttons: ICardAction[];
  subtitle: string;
  text: string;
  url: string;
}

export interface IAudioCard {
  title: string;
  buttons: ICardAction[];
  subtitle: string;
  text: string;
  image: {
    url: string;
    alt: string;
  };
  url: string[];
}

export interface IAnimationCard {
  title: string;
  subtitle: string;
  image: ICardImage[];
}

//////////// ------ Others  --------////////////////

export interface ICardAction {
  channelData?: any;
  displayText?: string;
  image?: string;
  text?: string;
  title: string;
  value: any;
  type: ActionTypes | string;
}

export interface IFact {
  key: string;
  value: string;
}

export interface IReceiptItem {
  image: ICardImage;
  price: string;
  quantity: string;
  subtitle: string;
  tap: ICardAction;
  text: string;
  title: string;
}

export interface ICardImage {
  alt?: string;
  tap?: ICardAction;
  url: string;
}
