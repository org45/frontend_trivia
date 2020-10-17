import React from 'react'
import Dasboard from './dashboard';
import Questions from './questions';
import Options from './options';
import Users from './users';


export default function QuizScreen() {
    return (
        <div>
            <h1>Trivia Quiz Screen</h1>
            <Dasboard/>
            <Questions/>
            <Options/>
            <Users/>
        </div>
    )
}
