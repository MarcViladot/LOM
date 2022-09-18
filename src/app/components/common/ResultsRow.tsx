import React, {FC, useMemo} from 'react';
import {Question} from '../../interfaces/Question';

interface Props {
    questions: Question[];
}

const ResultsRow: FC<Props> = ({questions}) => {

    const answered = useMemo(() => questions.filter(question => !!question.answer), [questions]);

    return (
        <div className={"absolute flex flex-row flex-wrap gap-1 p-2"}>
            {answered.map((question: Question, index: number) => (
                <span key={index} style={{width: 15, height: 15}} className={`rounded-full ${question.correct ? 'bg-green-500' : 'bg-red-500'}`}/>
            ))}
        </div>
    );
};

export default ResultsRow;
