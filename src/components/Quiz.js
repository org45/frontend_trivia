import React from 'react'
import { useHistory} from 'react-router-dom'
//import QuizScreen from './QuizScreen'
import '../index.css'

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
        <img
          style={{ width: 30, marginTop: -5 }}
          className="gImage"
          src="https://lh3.googleusercontent.com/a-/AOh14Gh_eIr194U36wPfApf8NCMvCpJliayGgHe_9m0N=s96-c"
          alt="doge"
        />
        <br/>
        <button onClick={handleQuizButtonApp}>App</button>
        <br/>
        <br/>
        <button onClick={handleQuizButton} >Quiz Trivia Screen</button>
        </>
    )
}
