import React from 'react'
import { useHistory} from 'react-router-dom'
//import QuizScreen from './QuizScreen'


export default function Quiz() {
    let history = useHistory();

    const handleQuizButton=()=>{
        history.push(`/triviaQuiz`)
    }
    const handleQuizButtonApp=()=>{
        history.push(`/triviaQuizApp`)
    }
    return (
        <>
        <button onClick={handleQuizButtonApp}>App</button>

        <button onClick={handleQuizButton}>Quiz Trivia</button>
        </>
    )
}
