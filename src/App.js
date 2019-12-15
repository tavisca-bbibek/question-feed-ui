import React from 'react';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import store from './redux/store';
import QuestionContainer from './components/QuestionContainer';
import QuestionAdder from './components/QuestionAdder';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QuestionAdder />
        <div className="body-container">
          <QuestionContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
