import React, {FC, useMemo, useState} from 'react';
import {Question, QuestionType} from '../../interfaces/Question';
import {shuffleArray} from '../../../../__mocks__/questionsList';

interface Props {
    question: Question;
    checkAnswer: (answer: string) => void;
    disabled: boolean;
}

export const QuestionOptions: FC<Props> = ({question, checkAnswer, disabled}) => {

    const options = useMemo(() => shuffleArray(question.options!), [question.options]);

    return (
        <div className={"flex flex-row gap-3 "}>
            {options.map((answer, index) => (
                <button key={index} onClick={() => checkAnswer(answer)}
                        disabled={disabled}
                        className={"app-button bg-[#405cf5]"}
                >{answer}</button>
            ))}
        </div>
    );
};

export const QuestionInput: FC<Props> = ({question, checkAnswer, disabled}) => {

    const [answer, setAnswer] = useState('');

    return (
        <div className={"flex flex-row gap-3 items-center "}>
            <input disabled={disabled} type={question.type === QuestionType.Number ? 'number' : 'text'}
                   className={"app-input"} value={answer} onChange={e => setAnswer(e.target.value)}/>
            <button onClick={() => {
                checkAnswer(answer);
                setAnswer('');
            }}
                    disabled={disabled || !answer}
                    className={"app-button bg-[#405cf5]"}
            >Check answer
            </button>
        </div>

    );
}
