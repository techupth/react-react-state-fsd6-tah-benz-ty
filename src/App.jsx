import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleThaiMessage = () => {
    setGreetingMessage('"สวัสดี!"');
  };
  const handleEngMessage = () => {
    setGreetingMessage('"Hi!"');
  };
  const handleChineseMessage = () => {
    setGreetingMessage('"你好!"');
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={handleThaiMessage}>สวัสดี!</button>
        <button onClick={handleEngMessage}>Hi!</button>
        <button onClick={handleChineseMessage}>你好!</button>
      </div>
    </div>
  );
}

export default App;
