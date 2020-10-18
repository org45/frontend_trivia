import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import TriviaQuiz from './components/Quiz'
import QuizScreen from './components/QuizScreen'
import TriviaQuizApp from './components/appOptions'
import {LoginProvider} from './context/LoginContext'
import {LastOptionProvider} from './context/LastOptionContext'

function App() {
  return (
    <LoginProvider>
    <LastOptionProvider>
    <Router>

            <Switch>
            <Route exact path="/"><TriviaQuiz/></Route>
            <Route path="/triviaQuiz"><QuizScreen/></Route>
            <Route path="/triviaQuizApp"><TriviaQuizApp/></Route>
            </Switch>
    </Router>
    </LastOptionProvider>
    </LoginProvider>

  );
}

export default App;
