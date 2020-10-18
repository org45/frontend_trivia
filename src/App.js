import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import TriviaQuiz from './components/Quiz'
import QuizScreen from './components/QuizScreen'
import TriviaQuizApp from './components/appOptions'
import {LoginProvider} from './context/LoginContext'

function App() {
  return (
    <LoginProvider>
    <Router>

            <Switch>
            <Route exact path="/"><TriviaQuiz/></Route>
            <Route path="/triviaQuiz"><QuizScreen/></Route>
            <Route path="/triviaQuizApp"><TriviaQuizApp/></Route>
            </Switch>
    </Router>
    </LoginProvider>

  );
}

export default App;
