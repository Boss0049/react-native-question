import { IQuestion } from "../mocks/question";

export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function getShuffledQuestions(questions: IQuestion[]): IQuestion[] {
  return shuffleArray(questions.map(question => ({
    ...question,
    answers: shuffleArray(question.answers)
  })));
}