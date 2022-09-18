import React, {FC} from 'react';
import QuestionItem from './QuestionItem';
import {Question} from '../../interfaces/Question';

interface Props {
    question: Question;
}

const QuestionResult: FC<Props> = ({question}) => {
    return (
        <QuestionItem question={question}>
            <div className={`text-xl ${question.correct ? 'text-green-800' : 'text-red-800'} flex flex-col items-center gap-3`}>
                <p>Your answer was {question.answer}</p>
                <p>{question.correct ? 'It was correct!' : `It was incorrect, the correct answer was ${question.correctAnswer}`}</p>
            </div>
        </QuestionItem>
    );
};

export default QuestionResult;
