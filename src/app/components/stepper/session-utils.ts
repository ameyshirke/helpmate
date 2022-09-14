export class SessionInfo{
  question: string;
  options: Option[];

  constructor(question: string, options: Option[]) {
    this.question = question;
    this.options = options;
  }
}

export class Option{
  id: number;
  label: string;
  selected: boolean = false;

  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}
