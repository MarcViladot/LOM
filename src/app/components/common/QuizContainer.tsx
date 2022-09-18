import React, {FC, ReducerAction} from 'react';
import {QuestionActionTypes, ReducerState} from '../../hooks/UseQuestionsReducer';
import QuestionDisplay from '../question/QuestionDisplay';
import ResultsRow from './ResultsRow';

interface Props {
    dispatch: React.Dispatch<ReducerAction<any>>;
    state: ReducerState;
}

const QuizContainer: FC<Props> = ({state, dispatch}) => {
    return (
        <div className={"flex-grow flex flex-col"}>
            <ResultsRow questions={state.questions!} />
            <QuestionDisplay question={state.questions![state.index]}
                             headerSlot={`Question ${state.index + 1}/${state.questions?.length}`}
                             nextAnswer={() => dispatch({type: QuestionActionTypes.NEXT_QUESTION})}
                             checkAnswer={(payload) => dispatch({
                                 type: QuestionActionTypes.CHECK_ANSWER,
                                 payload: payload
                             })}/>
        </div>
    );
};

export default QuizContainer;
