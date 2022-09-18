import React, {ReducerAction, useReducer} from 'react';
import {Question} from '../interfaces/Question';
import {questionsList, shuffleArray} from '../../../__mocks__/questionsList';
import {ac} from 'vitest/dist/global-d05ffb3f';

export interface ReducerState {
    questions?: Question[];
    index: number;
    finished: boolean;
}

const initialState: ReducerState = {
    index: 0,
    finished: false
}

export enum QuestionActionTypes {
    SET_QUESTIONS = 'setQuestions',
    CHECK_ANSWER = 'checkAnswer',
    NEXT_QUESTION = 'nextQuestion',
    RESET_QUESTIONS = 'resetQuestions'
}

const reducer = (state: ReducerState, action: any) => {
    switch (action.type) {
        case QuestionActionTypes.SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            };
        case QuestionActionTypes.CHECK_ANSWER:
            return {
                ...state,
                questions: state.questions!.map((question: Question, index) => {
                    if (index === state.index) {
                        return {
                            ...question,
                            correct: question.correctAnswer.toLowerCase() === String(action.payload).toLowerCase(),
                            answer: action.payload
                        }
                    }
                    return question;
                })
            };
        case QuestionActionTypes.NEXT_QUESTION:
            const isLastQuestion = state.index === state.questions!.length - 1;
            return {
                ...state,
                index: isLastQuestion ? state.index : state.index + 1,
                finished: isLastQuestion
            }
        case QuestionActionTypes.RESET_QUESTIONS:
            return {
                ...state,
                finished: false,
                questions: undefined,
                index: 0
            };
        default:
            return state;
    }
}


type ExportedProps = [
    state: ReducerState,
    dispatch: React.Dispatch<ReducerAction<any>>,
    loadQuestions: (numberOfQuestions: number) => void
]

const UseQuestionsReducer = (): ExportedProps => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const loadQuestions = (numberOfQuestions: number): void => {
        const questions = shuffleArray([...questionsList]).slice(0, numberOfQuestions);
        dispatch({type: QuestionActionTypes.SET_QUESTIONS, payload: questions});
    }

    return [state, dispatch, loadQuestions];
};

export default UseQuestionsReducer;
