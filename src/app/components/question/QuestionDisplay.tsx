import React, {FC, useMemo} from 'react';
import {Question, QuestionType} from '../../interfaces/Question';
import {QuestionInput, QuestionOptions} from './QuestionInput';
import QuestionItem from './QuestionItem';

interface Props {
    question: Question;
    checkAnswer: (answer: string) => void;
    nextAnswer: () => void;
    headerSlot: string;
}

const QuestionDisplay: FC<Props> = ({question, headerSlot, ...props}) => {

    const answered = useMemo(() => question.correct !== undefined, [question.correct]);

    return (
        <QuestionItem question={question} headerSlot={headerSlot}>
            {question.type === QuestionType.Multiple ?
                <QuestionOptions disabled={answered} question={question}
                                 checkAnswer={props.checkAnswer}/> : <QuestionInput disabled={answered} question={question}
                                                                                    checkAnswer={props.checkAnswer} />}
            {answered &&
                <>
                    <p className={(question.correct ? 'text-green-800' : 'text-red-800') + ' text-xl'}>
                        {question.correct ? 'Correct' : `Incorrect, the correct answer is ${question.correctAnswer}`}
                    </p>
                    <button className={"app-button bg-[#405cf5]"} onClick={props.nextAnswer}>Next question</button>
                </>
            }
        </QuestionItem>
    );
};

export default QuestionDisplay;
