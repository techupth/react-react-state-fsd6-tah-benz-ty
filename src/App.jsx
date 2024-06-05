import "./App.css";
import { useState } from "react";

function App() {
  const [greet, greeting] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">Greeting Message</div>
      <div className="greeting-container">{greet}</div>
      <div className="buttons">
        <button onClick={() => greeting(`สวัสดี!`)}>สวัสดี!</button>
        <button onClick={() => greeting(`Hi!`)}>Hi!</button>
        <button onClick={() => greeting(`你好!`)}>你好!</button>
      </div>
    </div>
  );
}

export default App;
