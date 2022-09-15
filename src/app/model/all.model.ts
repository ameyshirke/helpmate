export class Session {
  name: string;
  scenarios: Scenario[];
}

export class Scenario {
  desc: String;
  order: number;
  media: Media;
 // rntType: string;
 // theme: string;
 // category: string;
 // subCategory: string;
 // trialType: string;
 // repetition: string;
 // text: string;
 // positivelyPhrased : boolean;
  questionList: Question[];
}

export class Media  {
  url: string;
  type: string;
  transcript : string;
}

export class Question  {
  desc: string;
  feature: QuestionFeature;
  answers : Answer[];
}

export enum QuestionFeature  {
  POSITIVITY,
  VIVIDNESS
}

export class Answer  {
  id: number;
  answer: string;
  isRightAnswer : boolean;
}
