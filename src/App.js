import React from 'react';
import './App.css';
import ClassComponent from "./components/ClassComponent"
import FunctionalComponent from "./components/FunctionalComponent"

const clickMe = () => alert('hello im a functional component');
//basic jsx 
const button = <button onClick={clickMe}>Functional Component Button</button>;

function App() {
  return (
    <>
      {button}
      < ClassComponent />
      <FunctionalComponent name="Rannie" />
    </>
  );
}

export default App;
