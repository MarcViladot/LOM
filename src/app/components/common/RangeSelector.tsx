import React, {FC, useState} from 'react';
import {questionsList} from '../../../../__mocks__/questionsList';

interface Props {
    loadQuestions: (numberOfQuestions: number) => void;
}

const MAX_QUESTIONS = questionsList.length;

const RangeSelector: FC<Props> = ({loadQuestions}) => {

    const [numberOfQuestions, setNumberOfQuestions] = useState(10);

    return (
        <div className={"flex-grow flex flex-col items-center gap-5 justify-center"}>
            <h2 className={"mb-5 text-3xl"}>Select number of questions</h2>
            <p>{numberOfQuestions}</p>
            <input style={{width: 300}} value={numberOfQuestions}
                   type="range"
                   min="10" max={MAX_QUESTIONS}
                   onChange={(e) => setNumberOfQuestions(Number(e.target.value))}/>
            <button
                onClick={() => loadQuestions(numberOfQuestions)}
                className={"mt-4 app-button bg-[#405cf5]"}>
                Start
            </button>
        </div>
    );
};

export default RangeSelector;
