import React, {FC} from 'react';
import useQuestionsReducer, {QuestionActionTypes} from './app/hooks/UseQuestionsReducer';
import RangeSelector from './app/components/common/RangeSelector';
import Results from './app/components/common/Results';
import QuizContainer from './app/components/common/QuizContainer';

const App: FC = () => {

    const [state, dispatch, loadQuestions] = useQuestionsReducer();

    return (
        <div className={"h-screen w-full flex flex-col"}>
            {!Boolean(state.questions) ? <RangeSelector loadQuestions={loadQuestions}/> :
                <>
                    {
                        state.finished ? <Results questions={state.questions!}
                                                  startAgain={() => dispatch({type: QuestionActionTypes.RESET_QUESTIONS})}/> :
                            <QuizContainer dispatch={dispatch} state={state}/>
                    }
                </>
            }
        </div>
    )
}

export default App
