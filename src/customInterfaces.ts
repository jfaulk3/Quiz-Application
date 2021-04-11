export interface Question {
  category: string;
  type: string;
  difficulty: string;
  questions: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface Result {
  data: Data;
  status: number;
  statusText: string;
  headers: Object;
  config: Object;
  request: XMLHttpRequest;
}

export interface Data {
  response_code: number;
  results: Array<Question>;
}

export interface Options {
  numQuestions: number;
  category: string;
  difficulty: string;
  type: string;
}
