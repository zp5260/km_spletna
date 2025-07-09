export interface TextPart {
  isBold: boolean;
  newLine: boolean;
  text: string;
}

export interface Ticket {
  title: string;
  shortDesc: string;
  date: string;
  time: string;
  location: string;
  price: string;
  imgUrl: string;
  isDescArray: boolean;
  longDescArray: TextPart[];
  stripeLink: string;
}

