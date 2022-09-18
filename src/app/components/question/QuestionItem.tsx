import React, {FC} from 'react';
import {Question} from '../../interfaces/Question';

interface Props {
    question: Question;
    headerSlot?: string;
    children: React.ReactNode;
}

const QuestionItem: FC<Props> = ({question, headerSlot, ...props}) => (
    <div className={"flex-grow flex flex-col justify-center items-center gap-10"}>
        <h2 className={"text-3xl text-center"}>{headerSlot}</h2>
        <h2 className={"text-3xl text-center"}>{question.question}</h2>
        {props.children}
    </div>
);


export default QuestionItem;
