export enum QuestionType {
    Multiple = 0,
    Text = 1,
    Number = 2
}

export interface Question {
    question: string;
    correctAnswer: string;
    type: QuestionType;
    options?: string[];
    correct?: boolean;
    answer?: string;
}
