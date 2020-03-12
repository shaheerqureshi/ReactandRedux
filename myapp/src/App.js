import React, {Component} from 'react';
import  Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
     <h1>My first react App</h1>
     <p>Welcome</p>
     <Ninjas name="shaheer" age="23" belt="black"/>
    </div>
  );
}

export default App;
