import React, {FC, useMemo, useState} from 'react';
import {Question} from '../../interfaces/Question';
import QuestionItem from '../question/QuestionItem';
import QuestionResult from '../question/QuestionResult';

interface Props {
    questions: Question[];
    startAgain: () => void;
}

const Results: FC<Props> = ({questions, startAgain}) => {

    const correctAnswers = useMemo(() => questions.filter(question => question.correct).length, [questions]);
    const percentage = useMemo(() => (correctAnswers / questions.length) * 100, [correctAnswers, questions.length]);
    const message = useMemo(() => {
        if (percentage === 100) {
            return 'You are a genius!';
        } else if (percentage >= 70) {
            return 'Awesome job!';
        } else if (percentage >= 49) {
            return 'You did OK!';
        } else if (percentage >= 40) {
            return 'You can do better!';
        } else if (percentage >= 20) {
            return 'You need to study more!';
        }
        return 'You are a complete idiot!';
    }, [percentage]);

    const [selectedQuestion, setSelectedQuestion] = useState<Question>();

    return (
        <div className={"flex-grow flex flex-col justify-center items-center gap-10"}>
            <h2 className={"text-3xl"}>Correct
                answers: {correctAnswers}/{questions.length}</h2>

            <div className={"my-10 flex flex-col gap-3"}>
                <div className={"flex flex-row gap-5 flex-wrap justify-center"}>
                    {questions.map((question, index) => (
                        <button className={`app-button ${question.correct ? 'bg-green-400' : 'bg-red-500'}`}
                                onClick={() => setSelectedQuestion(question)}>{index + 1}</button>
                    ))}
                </div>
                {selectedQuestion && (<QuestionResult question={selectedQuestion} />)}
            </div>

            <h2 className={"text-3xl"}>{message}</h2>
            <button className={"app-button bg-[#405cf5]"} onClick={startAgain}>Start Again</button>
        </div>
    );
};

export default Results;
