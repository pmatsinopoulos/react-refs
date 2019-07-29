import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import CustomTextInput from "./CustomTextInput";
import CustomTextInputWithCallbackRef from "./CustomTextInputWithCallbackRef";

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <CustomTextInput/>
      <CustomTextInputWithCallbackRef/>
    </div>
  );
}

export default App;
