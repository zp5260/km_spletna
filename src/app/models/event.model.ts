export interface TextPart {
  isBold: boolean;
  newLine: boolean;
  text: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  groupLimit: string;
  price: string;
  imgUrl: string;
  longDescArray: TextPart[];
  stripeLink: string;
}

